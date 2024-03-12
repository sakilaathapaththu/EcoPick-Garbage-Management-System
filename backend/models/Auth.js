const router = require("express").Router();
const { User } = require("../Model/User");
const joi = require("joi");
const bcrypt = require("bcryptjs");


router.post("/",async(req,res) => {
    try{
        const { error } = validate(req.body);
        if(error)
            return res.status(400).send({ message:error.details[0].message });
        
        //Check if user exists
        const user = await User.findOne({ email: req.body.email });
        if(!user)
            return res.status(401).send({ message:"Invalid email or password" });

        //check password
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if(!validPassword)
            return res.status(401).send({ message: "Invalid email or password"});

        //Generate web token
        const token = user.generateAuthToken();
        res.status(200).send({ data:token, message:"Logged in successfully"})

    
    }catch(error){
        console.error(error);
        res.status(500).send({ message:"Internal server error"});
    }
})

const validate = (data) => {
    const schema = joi.object({
        email:joi.string().email().required().label("Email"),
        password:joi.string().required().label("Password"),
    })
    return schema.validate(data)
}

module.exports = router;