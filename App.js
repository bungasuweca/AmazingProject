import {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals, {text: enteredGoalText, 
        key: Math.random().toString()},
      ]);
  }

  return (
    <View style={styles.container}>
     <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          itemData.index
          return <GoalItem text={itemData.item.text} />
        }} alwaysBounceVertical={false}/>
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
