import { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';

import styles from './app.module.css';
import { Todo } from '@todo-list/shared-types'

export function useTodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = useCallback( async () => {
    const resp = await axios.get<Todo[]>('http://localhost:3333/api')
    setTodos(resp.data);
  }, [])

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const addTodo = useCallback( async (group: string, text: string) => {
      await axios.post('http://localhost:3333/api', {
        group,
        text
      });
      getTodos();
  }, [getTodos])

  const onDelGroup = useCallback( async ( group: string ) => {
    await axios.post('http://localhost:3333/api/delGroup', {
      group,
    });
    getTodos()

  }, [todos, getTodos])

  const onDelTask = useCallback( async ( id: number ) => {
    await axios.post('http://localhost:3333/api/delTask', {
      id,
    });
    getTodos()
  }, [todos, getTodos])

  const toggleTodo = useCallback( async ( id: number ) => {
    await axios.post('http://localhost:3333/api/setCompleted', {
      id,
      completed: !((todos.find( (todo) => todo.id === id ))?.completed),
    });
    getTodos()
  }, [todos, getTodos])

  const onHide = useCallback( async ( group: string ) => {
    await axios.post('http://localhost:3333/api/setVisible', {
      group,
      visible: !(todos.find( (todo) => todo.group === group ))?.visible,
    });
    getTodos()
  }, [todos, getTodos]);

  return {
    todos,
    getTodos,
    addTodo,
    onDelGroup,
    onDelTask,
    toggleTodo,
    onHide
  };
}
