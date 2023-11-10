import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
      />
      <Button title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default ToDoForm;1