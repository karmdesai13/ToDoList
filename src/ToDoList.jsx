import React from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const ToDoList = ({ tasks, removeTask }) => {
  return (
    <ScrollView>
      {tasks.map(task => (
        <Pressable key={task.id} style={[styles.listContainer]} >
          <View style={[styles.taskCard]}>
            <Text style={styles.taskText}>{task.text}</Text>
            <Button 
            title="Delete" 
            onPress={() => removeTask(task.id)} 
            style={[styles.deleteButton]}
          />
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
  listContainer: {
    flex: 1,
    padding: 20,
    
  },
  taskCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    elevation: 2,
    
   
  },
  taskText: {
    fontSize: 16,
    color: 'black', 
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 15,
    padding: 10,
  },
});

export default ToDoList;