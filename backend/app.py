from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import os

app = Flask(__name__)
CORS(app)

IMG_SIZE = 128
MODEL_PATH = "model/modelo_veiculos.h5"

model = load_model(MODEL_PATH)

classes = ["bicicleta", "carro", "moto"]

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "mensagem": "API do classificador de imagens funcionando!"
    })

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"erro": "Nenhuma imagem enviada"}), 400

    file = request.files["image"]

    image = Image.open(file).convert("RGB")
    image = image.resize((IMG_SIZE, IMG_SIZE))

    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)

    prediction = model.predict(image_array)

    index = np.argmax(prediction)
    classe = classes[index]
    confianca = float(prediction[0][index]) * 100

    return jsonify({
        "classe": classe,
        "confianca": round(confianca, 2)
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)