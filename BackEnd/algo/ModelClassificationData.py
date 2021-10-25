import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
import tensorflow as tf
from keras.models import Sequential
from keras.layers import Dense, Activation
from sklearn.metrics import mean_absolute_error,mean_squared_error
from keras.models import load_model






class create_model_brain():
    def scaler():
        url = 'C:/Users/Nour/CDApp/BackEnd/algo/Diagnostic_Brain.csv'
        df = pd.read_csv(url)
        X = df[['Age','Cephalee', 'Vomissement', 'Trouble_Cognitif', 'Crise_Epilepsie', 'Deficit_Neurologique']].values

        # Label (ou étiquette)
        y = df['Resultat'].values

        # Split (séparation / répartition)
        X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.3,random_state=42)
        scaler = MinMaxScaler()
        scaler.fit(X_train)

        X_train = scaler.transform(X_train)
        X_test = scaler.transform(X_test)
        return scaler
        
    def model_brain(X_train, X_test, y_train, y_test):
        model = Sequential([
            Dense(units=2),
            Dense(units=2),
            Dense(units=2)
        ])

        model = Sequential()

        model.add(Dense(2))
        model.add(Dense(2))
        model.add(Dense(2))

        model = Sequential()

        model.add(Dense(4,activation='relu'))
        model.add(Dense(4,activation='relu'))
        model.add(Dense(4,activation='relu'))

        # Couche finale pour notre prédiction avec un seul noeud de sortie
        model.add(Dense(1))

        model.compile(optimizer='rmsprop',loss='mse')
        model.fit(X_train,y_train,epochs=250)
        loss = model.history.history['loss']

        test_predictions = model.predict(X_test)
        pred_df = pd.DataFrame(y_test,columns=['Test Y'])
        model.save('C:/Users/Nour/CDApp/BackEnd/doctorapp/Brain_model.h5')

class create_model_breast():

    def scaler():
        url = 'C:/Users/Nour/CDApp/BackEnd/algo/Diagnostic_Breast.csv'
        df = pd.read_csv(url)
        X = df[['Age','Maternite', 'Constraception', 'Antecedent_F', 'Antecedente', 'Cycle', 'Signe']].values

        # Label (ou étiquette)
        y = df['Resultat'].values

        # Split (séparation / répartition)
        X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.3,random_state=42)
        scaler = MinMaxScaler()
        scaler.fit(X_train)

        X_train = scaler.transform(X_train)
        X_test = scaler.transform(X_test)
        return scaler