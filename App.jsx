import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ToDoForm from './src/ToDoForm';
import ToDoList from './src/ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry' },
    { id: 2, text: 'Go to gym' },
    { id: 3, text: 'Walk dog' },
  ]);

  const addTask = (taskText) => {
    
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

    
    
    const newTask = {
      id: newId,
      text: taskText,
    };
  
    
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

 
  

  

  return (
    <SafeAreaView>
      <View style={styles.view}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.lineStyle}>
      <Text style={styles.date}>16th November,2023</Text>
      <ToDoList tasks={tasks} removeTask={removeTask} />
      <ToDoForm addTask={addTask} />
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  view: {
    backgroundColor: 'lightblue',
    height: 800,
  },
  date: {
    fontSize: 30,
    color: '#5E72E4',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  lineStyle:{
    backgroundColor:'black',
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
    borderRadius: 20,
    height: 700,
   },

});

export default App;