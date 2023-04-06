import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import Primarybtn from '../components/Primarybtn';
import Colors from '../consts/colors';

function Start({onPickNumber}){
    const [enteredValue, setEnteredValue] = useState ('');

    function valueInputHandler(enteredText) {
        setEnteredValue(enteredText);
    }

    function resetValueHandler(){
        setEnteredValue('');
    }

    function confirmValueHandler() {
        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert('Invalid Number!', 'Sowwy, the entered number has to be between 1 to 99 !! o(￣┰￣*)ゞ', [{text: 'I understand', style:'default', onPress: resetValueHandler}]);
            return;
        }

       onPickNumber(chosenNumber);
    }


    return <View style={styles.inputContainer}>
        <TextInput 
            style={styles.inputNumber}       
            maxLength={2} 
            keyboardType="numeric"
            onChangeText={valueInputHandler}
            value={enteredValue}
        />
        <View style={styles.btnsContainer}>
            <View style={styles.btnContainer} >
                <Primarybtn onPress={resetValueHandler}> Reset </Primarybtn>
            </View>
            <View style={styles.btnContainer}>
                <Primarybtn onPress={confirmValueHandler}> Confirm </Primarybtn>
            </View>
         </View>
    </View>
}

export default Start;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:  'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 20,
        marginTop: 90,
        backgroundColor: Colors.primary2,
        borderRadius: 10,
        elevation: 40,
    },

    inputNumber: {
        height: 60,
        width: 70,
        textAlign: 'center',
        fontSize: 35,
        borderBottomColor: Colors.primary4 ,
        borderBottomWidth: 2,
        color: Colors.primary4,
        marginVertical: 5,
        fontWeight: 'bold',
    },

    btnsContainer:  {
        flexDirection: 'row',
    },

    btnContainer: {
        flex: 1,
    },
});