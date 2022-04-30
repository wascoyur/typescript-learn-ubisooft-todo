import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '../component/List';
import { TodoItem } from '../component/TodoItem';
import { ITodo } from '../types/types';

const Todo: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const hisory = useNavigate();
  const fetchTodos = async () => {
    try {
      await axios
        .get<ITodo[]>('http://jsonplaceholder.typicode.com/todos?limit=5')
        .then((res) => setTodos(res.data));
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      Todos list
      <hr />
      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onClick={(todo) => hisory(`/todos/${todo.id}`)}
          />
        )}
      />
    </div>
  );
};

export default Todo;
