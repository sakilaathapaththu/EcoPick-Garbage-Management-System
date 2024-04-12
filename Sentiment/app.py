from flask import Flask, jsonify, render_template, request, redirect
from prediction_pipeline import preprocessing, vectorizer, get_prediction
from logger import logging
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://sakila:sakila@client.cvrtm65.mongodb.net/?retryWrites=true&w=majority&appName=client"
db = PyMongo(app).db
CORS(app)

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

    logging.info('============== OPEN FEEDBACK PAGE =================')

    # Dummy Positive Feedback Messages : 
    # 1. Excellent job cleaning! Streets look great
    # 2. The garbage collectors did an excellent job cleaning up our area. The streets are spotless

    return render_template('index.html', data = data)

@app.route("/", methods = ['POST'])
def my_post():
    text = request.form["text"]
    name = request.form["name"]
    email = request.form["email"]
    db.inventory.insert_one({"username": name, "email": email,'feedback' : text})
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


# @app.route("/", methods=['POST'])
# def submit_feedback():
#     text = request.json['text']

#     preprocessed_txt = preprocessing(text)
#     vectorized_txt = vectorizer([preprocessed_txt])
#     prediction = get_prediction(vectorized_txt)

#     if prediction == 'negative':
#         global negative
#         negative += 1
#     else:
#         global positive
#         positive += 1

#     reviews.insert(0, text)
#     return jsonify({'message': 'Feedback submitted successfully'})



if __name__ == "__main__":
    app.run()