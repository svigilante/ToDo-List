// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';

import styles from './app.module.css';
import { Todo } from '@todo-list/shared-types'
import DeleteButton from "./components/DeleteButton";
import InfoCard from "./components/InfoCard";
import { useTodoList } from "../app/utils/lib/data-access/data-access"

export function App() {
  //const [todos, setTodos] = useState<Todo[]>([]);
  const {todos, 
         getTodos, 
         addTodo, 
         onDelGroup, 
         onDelTask, 
         toggleTodo, 
         onHide} = useTodoList();

  const groupInputRef = useRef<HTMLInputElement>(null)
  const textInputRef = useRef<HTMLInputElement>(null)

  const onAddTodo = useCallback( async () => {
    if (textInputRef.current && groupInputRef.current) {
      await addTodo(groupInputRef.current.value, textInputRef.current.value);
      groupInputRef.current.value = '';
      textInputRef.current.value = '';
      getTodos();
    }
  }, [addTodo])


  return (
    <div className={ styles?.['container'] }>
      <div>
        {[...new Set(todos.map(todo => todo.group))].map( (group) => (
          <div>
            {/* Category Folders */}
            <InfoCard 
              onChange={() => onHide(group)} 
              onClick={() => onDelGroup(group)}
              msgDelete="Delete Group"
              width='80%'
              letterColor='white'
              color="#353449"
              heightDelete="32px"
              widthDelete="46px"
              checkboxMsg='Hide/View'
            > 
              {group}
            </InfoCard>

            {/* Tasks */}
            {todos.map( (task) => (
              <div>
                {group === task.group && task.visible? 
                <InfoCard 
                    onChange={() => toggleTodo(task.id)} 
                    onClick={() => onDelTask(task.id)}
                    checked={task.completed}
                    radiusDelete="50%"
                    msgDelete="X"
                    widthDelete='30px'

                    secondText='Edit'
                    fontSizeSecond='16px'
                    widthSecond='49px'
                    heightSecond='29px'
                    radiusSecond='8px'
                    letterColorSecond='#353449'
                    colorSecond='#F9F8FC'
                > 
                    {task.text}
                </InfoCard>: <></>}
              </div>
            ) )}
            <br></br>
          </div>
        ))}
      </div>


      <div>
        <label>Category</label>
        <input ref={groupInputRef} />
        <br></br>
        <label>Task</label>
        <input ref={textInputRef} />
      </div>
      <div>
        <button onClick={onAddTodo}>Add</button>
      </div>

    </div>
  );
};



export default App;
