import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry' },
    { id: 2, text: 'Go to gym' },
    { id: 3, text: 'Walk dog' },
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;