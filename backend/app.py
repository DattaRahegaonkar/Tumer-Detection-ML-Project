from flask import Flask, request, jsonify
from flask_cors import CORS   # 🟢 Step 1: import CORS
import joblib
import numpy as np

# Initialize Flask app
app = Flask(__name__)

# 🟢 Step 2: Enable CORS (allow Next.js to connect)
CORS(app)

# Load trained model
model = joblib.load("tumor_model.pkl")

# Define all expected features (30 features as per the original dataset)
EXPECTED_FEATURES = [
    "radius_mean", "texture_mean", "perimeter_mean", "area_mean", "smoothness_mean",
    "compactness_mean", "concavity_mean", "concave_points_mean", "symmetry_mean", "fractal_dimension_mean",
    "radius_se", "texture_se", "perimeter_se", "area_se", "smoothness_se",
    "compactness_se", "concavity_se", "concave_points_se", "symmetry_se", "fractal_dimension_se",
    "radius_worst", "texture_worst", "perimeter_worst", "area_worst", "smoothness_worst",
    "compactness_worst", "concavity_worst", "concave_points_worst", "symmetry_worst", "fractal_dimension_worst"
]

@app.route('/')
def home():
    return "🧠 Tumor Detection Flask API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Input data from frontend (JSON format)
        data = request.get_json()

        # Validate input features
        if "features" not in data:
            return jsonify({"error": "Missing 'features' in request"}), 400

        features = data["features"]
        if not isinstance(features, list) or len(features) != len(EXPECTED_FEATURES):
            return jsonify({"error": f"Expected {len(EXPECTED_FEATURES)} features, got {len(features) if isinstance(features, list) else 'non-list'}"}), 400

        # Convert to numpy array and reshape
        features_array = np.array(features, dtype=float).reshape(1, -1)

        # Model prediction
        prediction = model.predict(features_array)[0]

        # Result message
        result = "Malignant Tumor Detected" if prediction == 1 else "Benign Tumor (No Cancer Detected)"
        confidence = model.predict_proba(features_array)[0][int(prediction)] * 100

        return jsonify({
            "prediction": int(prediction),
            "result": result,
            "confidence": round(confidence, 2),
            "features_used": EXPECTED_FEATURES
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/features', methods=['GET'])
def get_features():
    """Return the list of expected features for the frontend"""
    return jsonify({"features": EXPECTED_FEATURES})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)