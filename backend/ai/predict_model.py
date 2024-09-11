import sys
import numpy as np
import pandas as pd
import pickle
from sklearn.svm import SVC


# Load the saved model
with open('/Users/mac/Desktop/diabetes predictor app/backend/ai/model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

dataset = pd.read_csv('/Users/mac/Desktop/diabetes predictor app/backend/ai/diabetes.csv')
dataset_X = dataset.iloc[:, [1, 2, 5, 7]].values

from sklearn.preprocessing import MinMaxScaler
sc = MinMaxScaler(feature_range=(0, 1))
dataset_scaled = sc.fit_transform(dataset_X)


# Input data from Node.js
glucose = float(sys.argv[1])
insulin = float(sys.argv[2])
bmi = float(sys.argv[3])
age = float(sys.argv[4])

# Create a numpy array with the input data
input_data = np.array([[glucose, insulin, bmi, age]])
scaled_features = sc.transform(input_data)

# Make the prediction
prediction = model.predict(scaled_features)
prediction_proba = model.predict_proba(scaled_features)
# Return the prediction result
print(prediction[0])
print(prediction_proba[0][1])
