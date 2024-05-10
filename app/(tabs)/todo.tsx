import KeyboradWrapper from "@/components/KeyboradWrapper";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: false },
    { id: 3, text: "Do laundry", completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = () => {
    if (newTodoText.trim() === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoText("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new todo"
          value={newTodoText}
          onChangeText={setNewTodoText}
          onKeyPress={({ nativeEvent }) => {
            console.log("nativeEvent:", nativeEvent);
            if (nativeEvent.key === "Enter") {
              addTodo();
            }
          }}
        />
        <TouchableOpacity onPress={addTodo} style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Add</Text>
        </TouchableOpacity>
      </View>
      <KeyboradWrapper>
        <FlatList
          data={todos}
          renderItem={({ item: { completed, id, text } }) => (
            <Animated.View key={id} style={[styles.todoContainer]}>
              <TouchableOpacity
                onPress={() => markComplete(id)}
                style={styles.button}
              >
                <Checkbox
                  value={completed}
                  onValueChange={() => markComplete(id)}
                  color={completed ? "green" : "red"}
                  style={styles.checkbox}
                />
              </TouchableOpacity>
              <Text style={styles.todoText}>{text}</Text>
              <TouchableOpacity
                onPress={() => removeTodo(id)}
                style={styles.button}
              >
                <Ionicons size={28} name="trash-sharp" />
              </TouchableOpacity>
            </Animated.View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </KeyboradWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "white",
  },
  addButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "lightgreen",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  todoContainer: {
    width: "100%",
    backgroundColor: "lightblue",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  todoText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  button: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  checkbox: {
    padding: 10,
  },
});

export default Todo;
