import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { List } from '../component/List';
import { TodoItem } from '../component/UserItem';
import { ITodo } from '../types/types';

const Todo: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const fetchTodos = async () => {
    try {
      await axios
        .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?limit=5')
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
      Todo:FC
      <hr />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default Todo;
