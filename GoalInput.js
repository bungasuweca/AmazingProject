import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

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
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What to buy today?"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add list" onPress={addGoalHandler} />
      </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        marginRight: 8,
        padding: 8,
      },
});