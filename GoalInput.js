import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="What to buy today?"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <Button title="Add list" color={'#D9ACF5'} onPress={addGoalHandler} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" color={'#8785A2'}/>
                    </View>
                </View>
        </View>
      </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '90%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',

    },
    btn: {
        width: 150,
        marginHorizontal: 10,
    },


});