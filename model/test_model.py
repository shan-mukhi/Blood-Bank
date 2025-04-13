import joblib

# Load the trained model
model = joblib.load("donor_model.pkl")

# Test cases
sample_inputs = [
    [2, 50, 12500, 98],   # should be eligible
    [0, 0, 0, 0],         # clearly not eligible
    [1, 5, 1500, 10],     # borderline
    [2, 10, 2500, 60],    # your test input
]

# Predict
for i, data in enumerate(sample_inputs):
    prediction = model.predict([data])[0]
    print(f"Sample {i+1} → {data} → Prediction: {'✅ Eligible' if prediction == 1 else '❌ Not Eligible'}")
