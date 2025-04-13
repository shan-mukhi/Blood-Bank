from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib  # For loading the trained model
import numpy as np

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes (since React runs on a different port)
CORS(app)

# Load the trained model (ensure the path is correct)
model = joblib.load('donor_model.pkl')

# Define the route for the prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the form data sent by the frontend as JSON
        data = request.get_json()

        # Extract the necessary features (form data)
        recency = data.get('recency')
        frequency = data.get('frequency')
        monetary = data.get('monetary')
        time = data.get('time')

        # Check if all required fields are provided
        if None in [recency, frequency, monetary, time]:
            return jsonify({'error': 'Missing data, all fields are required'}), 400

        # Prepare the data for model prediction (should be in the right shape)
        input_data = np.array([[recency, frequency, monetary, time]])  # Reshape into 2D array

        # Predict using the trained model
        prediction = model.predict(input_data)

        # Return the prediction as JSON
        # Assuming 1 means eligible and 0 means not eligible
        return jsonify({'prediction': int(prediction[0])})

    except Exception as e:
        print("Error:", e)
        return jsonify({'error': 'Error processing request'}), 500

# Start the Flask application
if __name__ == "__main__":
    app.run(debug=True)
