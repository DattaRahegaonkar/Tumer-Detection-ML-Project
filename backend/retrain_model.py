import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib

# Load dataset
df = pd.read_csv('../frontend/Tumor_Detection.csv')
df.drop('id', axis=1, inplace=True)

# Encode label
le = LabelEncoder()
df['diagnosis_label'] = le.fit_transform(df['diagnosis'])
df.drop('diagnosis', axis=1, inplace=True)

# Top 7 features by correlation with diagnosis
TOP_7_FEATURES = [
    'concave points_worst',
    'perimeter_worst',
    'concave points_mean',
    'radius_worst',
    'perimeter_mean',
    'area_worst',
    'radius_mean'
]

X = df[TOP_7_FEATURES]
y = df['diagnosis_label']

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

joblib.dump(model, 'tumor_model.pkl')
print("Model retrained with 7 features and saved.")
print("Features:", TOP_7_FEATURES)
