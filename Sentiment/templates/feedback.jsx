import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  right: {
    flex: 1,
    padding: theme.spacing(3),
  },
  centered: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: 300,
  },
  reviewList: {
    marginTop: theme.spacing(2),
  },
  reviewItem: {
    marginBottom: theme.spacing(2),
  },
  reviewText: {
    wordWrap: 'break-word',
  },
}));

// // export default function SentimentAnalysis(props) {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <div className={classes.left}>
// //         <div className={classes.centered}>
// //           <h2>Add Your Feedback</h2>
// //           <h6>Give your valuable comment to our service</h6>
// //         </div>
// //       </div>

// //       <div className={classes.right}>
// //         <Card>
// //           <CardContent>
// //             <div className={classes.sentimentContainer}>
// //               <div>
// //                 <SentimentVerySatisfiedIcon color="primary" />
// //                 <Typography variant="body2">
// //                   Positive Feedback: {props.data.positive}
// //                 </Typography>
// //               </div>
// //               <div>
// //                 <SentimentVeryDissatisfiedIcon color="error" />
// //                 <Typography variant="body2">
// //                   Negative Feedback: {props.data.negative}
// //                 </Typography>
// //               </div>
// //             </div>
// //             <form noValidate autoComplete="off">
// //               <TextField
// //                 label="Write your comment..."
// //                 multiline
// //                 rows={4}
// //                 fullWidth
// //                 required
// //               />
// //               <Button variant="contained" type="submit" color="primary">
// //                 Submit
// //               </Button>
// //             </form>

// //             <List className={classes.reviewList}>
// //               {props.data.reviews.map((review) => (
// //                 <ListItem key={review} className={classes.reviewItem}>
// //                   <ListItemText
// //                     primary={<Typography variant="body2" className={classes.reviewText}>{review}</Typography>}
// //                   />
// //                   <Divider component="li" />
// //                 </ListItem>
// //               ))}
// //             </List>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // }



// export default function SentimentAnalysis(props) {
//   const classes = useStyles();
//   const [comment, setComment] = useState('');

//   const handleSubmit = async () => {
//     try {
//       await axios.post('/submit_feedback', { text: comment });
//       // Optionally, you can update state or display a success message here
//       setComment('');
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };

//   return (
//     <div className={classes.root}>
//       <div className={classes.left}>
//          <div className={classes.centered}>
//            <h2>Add Your Feedback</h2>
//            <h6>Give your valuable comment to our service</h6>
//           {/* <img
//              src="../static/products/project img 3.jpg" 
//              alt="Product Image"
//              className={classes.image}
//            /> */}
//          </div>
//        </div>
//       <form noValidate autoComplete="off" onSubmit={handleSubmit}>
//         <TextField
//           label="Write your comment..."
//           multiline
//           rows={4}
//           fullWidth
//           required
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <Button variant="contained" type="submit" color="primary">
//           Submit
//         </Button>
//       </form>
//       <List className={classes.reviewList}>
//                {props.data.reviews.map((review) => (
//                  <ListItem key={review} className={classes.reviewItem}>
//                    <ListItemText
//                      primary={<Typography variant="body2" className={classes.reviewText}>{review}</Typography>}
//                    />
//                    <Divider component="li" />
//                  </ListItem>
//                ))}
//              </List>
//     </div>
//   );
// }

function Feedback() {
    const [text, setText] = useState('');
    const [reviews, setReviews] = useState([]);
    const [positive, setPositive] = useState(0);
    const [negative, setNegative] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/', { text });
            // Update positive or negative count based on the response from the server

             if (response.data.prediction === 'positive') {
                 setPositive((prevPositive) => prevPositive + 1);
              } else {
                setNegative((prevNegative) => prevNegative + 1);
            }
            setReviews([...reviews, text]);
            setText('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 bg-primary text-white">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div>
                            <h2>Feedback</h2>
                            <h6>Give your valuable Feedback for our service.</h6>
                            {/* <img src="../static/products/project img 3.jpg" alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                            <div className="d-flex flex-column col-md-8">
                                <div>
                                    <label>Positive Feedbacks : {positive}</label>
                                </div>
                                <div>
                                    <label>Negative Feedbacks : {negative}</label>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <textarea
                                        name="text"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        className="form-control"
                                        rows="3"
                                        placeholder="Write your comment..."
                                    ></textarea>
                                    <input type="submit" className="btn btn-primary mt-2" value="Submit" />
                                </form>
                                <div className="comment-bottom bg-white p-2 px-4">
                                    {reviews.map((review, index) => (
                                        <div key={index} className="commented-section mt-2">
                                            {/* Add user avatar or any other information if needed */}
                                            <div className="text-nowrap bd-highlight">
                                                <span>{review}</span>
                                            </div>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
