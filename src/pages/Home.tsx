import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const task = {
      id : new Date().getTime(),
      title:newTaskTitle,
      done:false
    }

    //Pelo set eu recupero todos os taks anteriores e incluo a nova.
    setTasks(oldTasks => [...oldTasks, task])
    
  }

  function handleToggleTaskDone(id: number) {
    //Quando não é tipo primitivo ele pega a referência da memória e por isso ele trás os tasks completo.

    const updatedTasks = tasks.map(task => ({...task}))
    const updatedTask = updatedTasks.find(tarefa => tarefa.id === id)
    
    if(!updatedTask)
      return;

    //Diferente do que já tem
    updatedTask.done = !updatedTask.done;

    setTasks(updatedTasks);

    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldTasks => oldTasks.filter(
      task => task.id !== id
    ))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})