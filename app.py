import streamlit as st
import pickle
import numpy as np

# Load model
model = pickle.load(open("model.pkl", "rb"))

st.title("🏠 House Price Prediction")

# Inputs
area = st.number_input("Area (sq ft)")
bedrooms = st.number_input("Bedrooms")
bathrooms = st.number_input("Bathrooms")

# Button
if st.button("Predict Price"):
    input_data = np.array([[area, bedrooms, bathrooms]])
    prediction = model.predict(input_data)

    st.success(f"Estimated Price: ${prediction[0]:,.2f}")