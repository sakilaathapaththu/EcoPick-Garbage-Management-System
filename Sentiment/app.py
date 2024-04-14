from flask import Flask, render_template, request, redirect
from prediction_pipeline import preprocessing, vectorizer, get_prediction
from logger import logging
from pymongo import MongoClient

# Connect to MongoDB Atlas
client = MongoClient("mongodb+srv://praveen:praveen123@cluster0.lcou8zr.mongodb.net/main")
db = client["main"]
collection = db["feedback"]
# praveen123
# praveen
app = Flask(__name__)

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

    return render_template('index.html', data=data)

@app.route("/", methods=['POST'])
def my_post():
    text = request.form['text']
    name = request.form['name']
    email = request.form['email']

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

    # Insert data into MongoDB
    feedback_data = {
        "name": name,
        "email": email,
        "text": text
    }
    collection.insert_one(feedback_data)

    return redirect(request.url)

if __name__ == "__main__":
    app.run()