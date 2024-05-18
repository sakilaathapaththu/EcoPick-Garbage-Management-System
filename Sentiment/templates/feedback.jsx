import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Container, Typography, TextField, Button, FormControlLabel, Checkbox, Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftSplit: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSplit: {
    flex: 2,
    padding: theme.spacing(5),
  },
  feedbackImage: {
    width: '400%',
    maxWidth: 600,
  },
  feedbackTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  feedbackForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  feedbackInput: {
    marginBottom: theme.spacing(2),
  },
  feedbackTextArea: {
    marginBottom: theme.spacing(3),
  },
  feedbackPositiveNegative: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  reviewsSection: {
    // Add styles for reviews section if needed (currently commented out)
    // borderTop: `1px solid ${theme.palette.divider}`,
    // paddingTop: theme.spacing(3),
  },
}));

const FeedbackForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [telephone, setTelephone] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here (e.g., send data to server)
    console.log('Form submitted:', { name, email, city, telephone, feedback });

    setName('');
    setEmail('');
    setCity('');
    setTelephone('');
    setFeedback('');
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftSplit}>
        <img src="../static/products/feedback.jpg" alt="Feedback" className={classes.feedbackImage} />
      </div>
      <div className={classes.rightSplit}>
        <Container maxWidth="md">
          <Typography variant="h2" className={classes.feedbackTitle}>
            Share Your Thoughts
          </Typography>
          <form onSubmit={handleSubmit} className={classes.feedbackForm}>
            <Typography variant="h6" align="center">
              Your feedback fuels our growth! Share your experience with us.
            </Typography>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.feedbackInput}
              required
            />
            <TextField
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.feedbackInput}
              required
            />
            <TextField
              label="City"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={classes.feedbackInput}
            />
            <TextField
              label="Contact Number"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className={classes.feedbackInput}
            />
            <TextField
              label="Feedback"
              id="feedback"
              multiline
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className={classes.feedbackTextArea}
              required
            />
            <Box className={classes.feedbackPositiveNegative}>
              <FormControlLabel
                control={<Checkbox checked={positive} onChange={() => setPositive(!positive)} />}
                label="Positive Feedback"
              />
              <FormControlLabel
                control={<Checkbox checked={negative} onChange={() => setNegative(!negative)} />}
                label="Negative Feedback"
              />
            </Box>
            <Button variant="contained" color="primary" type="submit">
              Submit Feedback
            </Button>
          </form>
          <Divider variant="middle" className={classes.reviewsSectionDivider} />
          <Typography variant="h6" align="center" className={classes.reviewsSectionTitle}>
            Recent Reviews
          </Typography>
          <List className={classes.reviewsSection}>
            {reviews.map((review) => (
              <ListItem key={review} className={classes.reviewListItem}>
                <ListItemText primary={review} />
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    </div>
  );
};

export default FeedbackForm;