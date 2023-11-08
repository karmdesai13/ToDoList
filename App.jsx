
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { ToDoForm } from './src/ToDoForm';
import { ToDoList } from './src/ToDoList';

function App() {

  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const handleAddTask=(task)=>{
    setTasks([...tasks, task]);
  };
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAddTask={handleAddTask}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});



export default App;
