import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


const ToDoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    
    const fetchTasks = async () => {
      try {
        
        const tasksData = await import('./tasks.json');
        setTasks(tasksData.tasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddRandomTask = () => {
    
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      const randomTask = tasks[randomIndex];
      setNewTask(randomTask);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setNewTask}
        value={newTask}
      />
     <View style={styles.buttonContainer}>
  <Button
    title="Add Task"
    onPress={() => {
      addTask(newTask);
      setNewTask(''); 
    }}/>

    <Button style={styles.button}
          title="Generate Random Task"
          onPress={handleAddRandomTask}
        />
  
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    
  },
  input: {
    flex: 1, 
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 25,
    fontSize: 18,
    marginRight: 10, 
    elevation: 5,
    marginBottom: 10,
    
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 3, width: 0 },
  },
  buttonContainer: {
    backgroundColor: '#5E72E4', 
    borderRadius: 25, 
    overflow: 'hidden', 
    
  },
 
});

export default ToDoForm;
