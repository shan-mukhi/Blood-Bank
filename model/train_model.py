import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Step 1: Read the CSV
df = pd.read_csv("blood_donation_data.csv")

# Step 2: Rename columns for easier access
df.columns = ["Recency", "Frequency", "Monetary", "Time", "Target"]

# Step 3: Features and labels
X = df[["Recency", "Frequency", "Monetary", "Time"]]
y = df["Target"]

# Step 4: Split and train
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
clf = RandomForestClassifier()
clf.fit(X_train, y_train)

# Step 5: Evaluate the model
y_pred = clf.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Sample predictions:", y_pred[:10])

# Step 6: Save the model
joblib.dump(clf, "donor_model.pkl")
print("Model saved successfully!")
