
# 🏠 House Price Prediction ML Project


## 📌 Description

A simple web application that predicts house prices based on Area, Bedrooms, and Bathrooms. The project uses a Random Forest machine learning model converted to JavaScript and runs entirely in the browser. No backend is required.

## 🧠 ML Models Used
- Decision Tree
- Random Forest

## 🚀 Features
- Predict house price
- Web app using Streamlit
- Also Predict house prices instantly in the browser
- Fully frontend-based (HTML, CSS, JS)
- Modern, responsive UI with house illustration/logo


## ⚡ How It Works
- Train a Decision Tree & Random Forest model in Python and save the best model as model.pkl
- Convert the model to JavaScript using m2cgen
```bash
import m2cgen as m2c
import pickle

model = pickle.load(open("model.pkl", "rb"))
js_code = m2c.export_to_javascript(model)

with open("model.js", "w") as f:
    f.write(js_code)
```
- Include model.js in the website
- HTML inputs take user data (Area, Bedrooms, Bathrooms)
- Click Predict → JS function predictPrice() calls ML model → shows price
## ⚙️ Installation

#### Clone the project

```bash
  git clone https://github.com/Mudassar-23/House-Price-Prediction-App.git
```

#### Run Locally

```bash
  pip install -r requirements.txt
  streamlit run app.py
  python -m streamlit run app.py
```

#### Live Demo on streamlit

```bash
  https://house-price-prediction-app-ml.streamlit.app/
```
#### Live Demo on website
```bash
https://house-price-prediction-app-gzfx.vercel.app/
```
