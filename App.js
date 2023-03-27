import {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals, {text: enteredGoalText, 
        id: Math.random().toString()},
      ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);

    });
  }

  return (
    <View style={styles.container}>
      <Button
        title='Add groceries' 
        color="#395144" 
        onPress={startAddGoalHandler}
      />
     <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} /> 
      <View style={styles.listContainer}>
        <FlatList data={courseGoals} 
        renderItem={(itemData) => {
            return(
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id} 
              onDeleteItem={deleteGoalHandler} 
            />
            );
        }} 
        keyExtractor={(item, index) => {return item.id}}
        alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 5,
  },
});
