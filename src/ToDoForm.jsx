import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

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
    }}
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
