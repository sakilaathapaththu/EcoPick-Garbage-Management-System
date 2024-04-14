from flask import Flask, render_template, request, redirect
from prediction_pipeline import preprocessing, vectorizer, get_prediction
from logger import logging
from flask_pymongo import PyMongo

app = Flask(__name__)


app.config["MONGO_URI"] = "mongodb+srv://client:client@cluster0.ntgxwfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
feedback = PyMongo(app)
db = feedback.db

logging.info('Flask server started')

data = dict()
reviews = []
positive = 0
negative = 0

@app.route("/")
def index():
    data['reviews'] = reviews
    data['positive'] = positive
    data['negative'] = negative

    logging.info('============== OPEN HOME PAGE =================')

    return render_template('index.html', data = data)

@app.route("/", methods = ['POST'])
def my_post():

    text = request.form['text']

    print('Text : {text}')



    preprocessed_txt = preprocessing(text)
    logging.info(f'Preprocessed Text : {preprocessed_txt}')

    vectorized_txt = vectorizer(preprocessed_txt)
    logging.info(f'Vectorized Text : {vectorized_txt}')

    prediction = get_prediction(vectorized_txt)
    logging.info(f' Prediction : {prediction}')

    if prediction == 'negative':
        global negative
        negative += 1
    else:
        global positive
        positive += 1

    reviews.insert(0, text)
    return redirect(request.url)

@app.route("/", methods = ['POST'])
def db_con():
    
    name = request.form["name"]
    email = request.form["email"]
    text = request.form["text"]

    # Store user feedback in MongoDB
    db.feedback.insert_one({
        'username': name,
        'email': email,
        'feedback': text
    })


if __name__ == "__main__":
    app.run()










# from flask import Flask, render_template, request, redirect
# from flask_pymongo import PyMongo
# from pymongo import MongoClient
# from prediction_pipeline import preprocessing, vectorizer, get_prediction
# from logger import logging
# from mongo_config import MONGO_URI

# app = Flask(__name__)
# client = MongoClient(MONGO_URI)
# db = client['mydbgar']  # Use your database name
# collection = db['feedback']  # Use your collection name

# logging.info('Flask server started')

# data = dict()
# reviews = []
# positive = 0
# negative = 0

# @app.route("/", methods=['POST'])
# def index():
#     data['reviews'] = reviews
#     data['positive'] = positive
#     data['negative'] = negative

#     logging.info('============== OPEN HOME PAGE =================')

#     if request.method == 'POST':
#         name = request.form['name']
#         email = request.form['email']
#         feedback = request.form['feedback']

#         # Insert data into MongoDB
#         collection.insert_one({
#             'name': name,
#             'email': email,
#             'feedback': feedback
#         })

#         return 'Feedback submitted successfully!'


#     return render_template('index.html', data = data)

# @app.route("/", methods = ['POST'])
# def my_post():
#     text = request.form['text']

#     print('Text : {text}')


#     preprocessed_txt = preprocessing(text)
#     logging.info(f'Preprocessed Text : {preprocessed_txt}')

#     vectorized_txt = vectorizer(preprocessed_txt)
#     logging.info(f'Vectorized Text : {vectorized_txt}')

#     prediction = get_prediction(vectorized_txt)
#     logging.info(f' Prediction : {prediction}')

#     if prediction == 'negative':
#         global negative
#         negative += 1
#     else:
#         global positive
#         positive += 1


#     reviews.insert(0, text)
#     return redirect(request.url)


# if __name__ == "__main__":
#     app.run()




# from flask import Flask, render_template, request, redirect
# from prediction_pipeline import preprocessing, vectorizer, get_prediction
# from logger import logging
# from pymongo import MongoClient
# from mongo_config import MONGO_URI

# app = Flask(__name__)

# # # DB Connection
# # client = MongoClient(MONGO_URI)
# # db = client['test'] # Use database name
# # collection = db['feedback'] # Use collection name


# logging.info('Flask server started')

# data = dict()
# reviews = []
# positive = 0
# negative = 0

# @app.route("/")
# def index():
#     data['reviews'] = reviews
#     data['positive'] = positive
#     data['negative'] = negative

#     logging.info('============== OPEN HOME PAGE =================')

#     # name = request.form['name']
#     # email = request.form['email']
#     # feedback = request.form['text']

#     # collection.insert_one({
#     #         'name': name,
#     #         'email': email,
#     #         'feedback': feedback
#     #     })

#     return render_template('index.html', data = data)

# @app.route("/", methods = ['POST'])
# def my_post():
#     text = request.form['text']

#     print('Text : {text}')


#     preprocessed_txt = preprocessing(text)
#     logging.info(f'Preprocessed Text : {preprocessed_txt}')

#     vectorized_txt = vectorizer(preprocessed_txt)
#     logging.info(f'Vectorized Text : {vectorized_txt}')

#     prediction = get_prediction(vectorized_txt)
#     logging.info(f' Prediction : {prediction}')

#     if prediction == 'negative':
#         global negative
#         negative += 1
#     else:
#         global positive
#         positive += 1


#     reviews.insert(0, text)
#     return redirect(request.url)


# if __name__ == "__main__":
#     app.run()





# from flask import Flask, jsonify, render_template, request, redirect
# from flask_pymongo import PyMongo
# from flask_cors import CORS
# from prediction_pipeline import preprocessing, vectorizer, get_prediction
# from logger import logging

# app = Flask(__name__)
# CORS(app)

# # Configure MongoDB connection
# app.config["MONGO_URI"] = "mongodb+srv://sakila:sakila@client.cvrtm65.mongodb.net/your_database_name_here?retryWrites=true&w=majority"
# mongo = PyMongo(app)

# logging.info('Flask server started')

# data = dict()
# reviews = []
# positive = 0
# negative = 0

# @app.route("/")
# def index():
#     data['reviews'] = reviews
#     data['positive'] = positive
#     data['negative'] = negative

#     logging.info('============== OPEN FEEDBACK PAGE =================')

#     return render_template('index.html', data=data)

# @app.route("/", methods=['POST'])
# def my_post():
#     text = request.form["text"]
#     name = request.form["name"]
#     email = request.form["email"]
    
#     # Insert data into MongoDB
#     mongo.db.inventory.insert_one({"username": name, "email": email, 'feedback': text})

#     preprocessed_txt = preprocessing(text)
#     logging.info(f'Preprocessed Text : {preprocessed_txt}')

#     vectorized_txt = vectorizer(preprocessed_txt)
#     logging.info(f'Vectorized Text : {vectorized_txt}')

#     prediction = get_prediction(vectorized_txt)
#     logging.info(f' Prediction : {prediction}')

#     if prediction == 'negative':
#         global negative
#         negative += 1
#     else:
#         global positive
#         positive += 1

#     reviews.insert(0, text)
#     return redirect(request.url)

# if __name__ == "__main__":
#     app.run()











# from flask import Flask, jsonify, render_template, request, redirect
# from prediction_pipeline import preprocessing, vectorizer, get_prediction
# from logger import logging
# from flask_pymongo import PyMongo
# from flask_cors import CORS

# app = Flask(__name__)

# # Configure MongoDB connection (replace with your actual connection details)
# app.config["MONGO_URI"] = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority&appName=client"
# db = PyMongo(app).db
# CORS(app)

# logging.info('Flask server started successfully')

# # Global variables for sentiment analysis results (consider using a database for persistence)
# data = dict()
# reviews = []
# positive = 0
# negative = 0

# @app.route("/")
# def index():
#     """
#     Renders the main feedback page.

#     - Retrieves the latest feedback data from the `reviews` and sentiment analysis counters.
#     - Logs a message indicating the feedback page is open.
#     - Returns the rendered `index.html` template with the data context.
#     """

#     data['reviews'] = reviews
#     data['positive'] = positive
#     data['negative'] = negative

#     logging.info('============== OPEN FEEDBACK PAGE =================')

#     # You may consider fetching feedback from the database instead of dummy data
#     # dummy_positive_messages = [
#     #     "Excellent job cleaning! Streets look great",
#     #     "The garbage collectors did an excellent job cleaning up our area. The streets are spotless"
#     # ]
#     # reviews.extend(dummy_positive_messages)  # Uncomment to use dummy data

#     return render_template('index.html', data=data)


# @app.route("/", methods=['POST'])
# def my_post():
#     """
#     Handles form submissions for feedback.

#     - Extracts the user's name, email, and message (text) from the submitted form data.
#     - Inserts a new document into the "inventory" collection of the MongoDB database,
#       containing the user's information and feedback text.
#     - Preprocesses, vectorizes, and predicts the sentiment of the feedback text.
#     - Updates the global sentiment analysis counters (positive/negative).
#     - Adds the feedback text to the `reviews` list (consider database storage for persistence).
#     - Redirects the user back to the feedback page.
#     """

#     text = request.form["text"]
#     name = request.form["name"]
#     email = request.form["email"]

#     # Store user feedback in MongoDB
#     db.inventory.insert_one({
#         "username": name,
#         "email": email,
#         "feedback": text
#     })
#     print(f'Text received from user: {text}')

#     # Sentiment analysis pipeline (consider using an API or library for efficiency)
#     preprocessed_txt = preprocessing(text)
#     logging.info(f'Preprocessed Text: {preprocessed_txt}')

#     vectorized_txt = vectorizer(preprocessed_txt)
#     logging.info(f'Vectorized Text: {vectorized_txt}')

#     prediction = get_prediction(vectorized_txt)
#     logging.info(f'Predicted Sentiment: {prediction}')

#     # Update sentiment analysis counters
#     if prediction == 'negative':
#         negative += 1
#     else:
#         positive += 1

#     # Add user feedback to the list (consider database storage for persistence)
#     reviews.insert(0, text)

#     return redirect(request.url)

# if __name__ == "__main__":
#     app.run()











# from flask import Flask, render_template, request, redirect
# from flask_pymongo import PyMongo
# from pymongo import MongoClient
# from prediction_pipeline import preprocessing, vectorizer, get_prediction
# from logger import logging
# from mongo_config import MONGO_URI

# app = Flask(__name__)
# # app.config["MONGO_URI"] = MONGO_URI
# # mongo = PyMongo(app)
# client = MongoClient(MONGO_URI)
# db = client['mydatabase']  # Use your database name
# collection = db['feedback']  # Use your collection name

# logging.info('Flask server started successfully')

# data = dict()
# reviews = []
# positive = 0
# negative = 0

# @app.route("/")
# def index():
#     data['reviews'] = reviews
#     data['positive'] = positive
#     data['negative'] = negative

#     return render_template('index.html', data=data)

# @app.route("/", methods=['GET', 'POST'])
# def my_post():
#     text = request.form["text"]
#     name = request.form["name"]
#     email = request.form["email"]

#     # Store user feedback in MongoDB
#     mongo.db.feedback.insert_one({
#         "name": name,
#         "email": email,
#         "feedback": text
#     })

#     preprocessed_txt = preprocessing(text)
#     logging.info(f'Preprocessed Text : {preprocessed_txt}')

#     vectorized_txt = vectorizer(preprocessed_txt)
#     logging.info(f'Vectorized Text : {vectorized_txt}')

#     prediction = get_prediction(vectorized_txt)
#     logging.info(f' Prediction : {prediction}')


#     if prediction == 'negative':
#         global negative
#         negative += 1
#     else:
#         global positive
#         positive += 1

#     return redirect(request.url)

# if __name__ == "__main__":
#     app.run()
