const router = require("express").Router();
const { User } = require("../models/User");
const joi = require("joi");
const bcrypt = require("bcryptjs");


router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        if (req.body.email === "admin@gmail.com" && req.body.password === "admin") {
            const token = jwt.sign({ email: req.body.email }, process.env.JWT_PRIVATE_KEY, { expiresIn: "7d" });
            res.status(200).send({ data: token, message: "Admin logged in successfully" });
        } else {
            const user = await User.findOne({ email: req.body.email });
            if (!user)
                return res.status(401).send({ message: "Invalid email or password" });

            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword)
                return res.status(401).send({ message: "Invalid email or password" });

            const token = user.generateAuthToken();
            res.status(200).send({ data: token, message: "User logged in successfully" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});
// router.post("/",async(req,res) => {
//     try{
//         const { error } = validate(req.body);
//         if(error)
//             return res.status(400).send({ message:error.details[0].message });
        
//         //Check if user exists
//         const user = await User.findOne({ email: req.body.email });
//         if(!user)
//             return res.status(401).send({ message:"Invalid email or password" });

//         //check password
//         const validPassword = await bcrypt.compare(
//             req.body.password, user.password
//         );
//         if(!validPassword)
//             return res.status(401).send({ message: "Invalid email or password"});

//         //Generate web token
//         const token = user.generateAuthToken();
//         res.status(200).send({ data:token, message:"Logged in successfully"})

    
//     }catch(error){
//         console.error(error);
//         res.status(500).send({ message:"Internal server error"});
//     }
// })

const validate = (data) => {
    const schema = joi.object({
        email:joi.string().email().required().label("Email"),
        password:joi.string().required().label("Password"),
    })
    return schema.validate(data)
}


module.exports = router;