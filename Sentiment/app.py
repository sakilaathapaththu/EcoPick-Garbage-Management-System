from flask import Flask, jsonify, render_template, request, redirect
from prediction_pipeline import preprocessing, vectorizer, get_prediction
from logger import logging

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