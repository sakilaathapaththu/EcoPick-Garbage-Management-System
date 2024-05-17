# EcoPick : Online Garbage Management System

EcoPick is a modern online garbage management system that incorporates live tracking, sentiment analysis feedback, and robust user and driver management functionalities. This integrated system optimizes waste management processes by providing real-time monitoring, analyzing user feedback sentiment, and effectively managing users and drivers for efficient operation.

## Features

- **Live Tracking System**: Users can track garbage collection activities in real-time, ensuring efficient waste management operations.
- **Sentiment Analysis Feedback**: The system analyzes user feedback to gauge public sentiment towards waste management services, facilitating continuous improvement.
- **Effective User Management System**: Robust user management functionalities ensure secure access control and personalized user experiences.
- **Technology Stack**: EcoPick is built using Python, MERN (MongoDB, Express.js, React.js, Node.js), JavaScript, Material-UI (MUI), Flask, and other libraries.

## How We Built EcoPick

### Technologies Used
- **Frontend**: React.js, Material-UI (MUI), JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Sentiment** : Python, Flask, keggle datasets
- **Additional Libraries**: nltk, numpy, pandas, re, string

### Project Structure
- **Backend**: The backend logic and API endpoints are developed using Flask and Python.
- **Frontend**: React.js is used to create the user interface, with Material-UI for styling and components.
- **Database**: MongoDB is utilized to store data related to garbage management activities, user information, and feedback.

### Implementation Details
- **Live Tracking System**: Utilizes geolocation data and real-time updates to provide accurate garbage collection tracking.
- **Sentiment Analysis Feedback**: Integrates natural language processing (NLP) techniques to analyze user feedback and generate sentiment insights.
- **User Management System**: Implements authentication, authorization, and user profile management functionalities to ensure secure access and personalized experiences.

## Getting Started
1. **Clone the Repository**: 
```
https://github.com/sakilaathapaththu/EcoPick-Garbage-Management-System.git
```
2. **Install Dependencies**: Navigate to the project directory and run `npm install` for frontend dependencies and `pip install -r requirements.txt` for backend dependencies.
3. **Run the Application**: Start the backend server by running `npm run dev`, and start the frontend server with `npm start`.
4. **Run the Sentiment**: Open the `Sentiment` in the terminal and start flask proframme using `python app.py` command or `Flask run` command.
5. **Access EcoPick**: Open your web browser and navigate to `http://localhost:3000` to access the EcoPick application.

## Contributors
- [Sakila Athapaththu](https://github.com/sakilaathapaththu) - **Team Lead** - **Live Tracking System**
- [Praveen Liyanage](https://github.com/PraveenLiyanage) - **Sentiment Analysed Feedback System**
- [Chamodi Kumanayaka](https://github.com/IT21387708CTKUMANAYAKA) - **User Management System**
- [Kavishka Sathsarani](https://github.com/KavishkaBingun) - **Driver Management System**

## License
This project is licensed under the [MIT License](LICENSE).
