import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ToDoForm from '../ToDoForm';
import ToDoList from '../ToDoList';




function Home({ navigation }) {


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
      <ScrollView>
      <View style={styles.view}>
      
      <Text style={styles.title}>To Do List</Text>
      
      
      <View style={styles.lineStyle}>
      <Text style={styles.date}>16th November,2023</Text>
      <ToDoList tasks={tasks} removeTask={removeTask} />
      <ToDoForm addTask={addTask} />

      <Button
        style={styles.button}
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
      
      </View>
      
      </View>
        </ScrollView>
      
    </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      justifyContent: 'center', 
    },
    button: {
        backgroundColor: '#5E72E4',
        borderRadius: 25,
        padding: 10,
        elevation: 2,
        marginBottom: 10,
        },
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
      
      
      
      margin:10,
      borderRadius: 20,
      height: 700,
     },
  
  });
  
export default Home;