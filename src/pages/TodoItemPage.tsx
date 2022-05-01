import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ITodo } from '../types/types';

const TodoItemPage: FC = () => {
  const { state } = useLocation();
  const [todo, setTodo] = useState<ITodo | unknown>(null);
  useEffect(() => {
    setTodo(state);
  }, [state]);

  return (
    <div>
      <h2>Страциа задачи</h2>
      {JSON.stringify(state)}
      {/* <>{todo}</> */}
    </div>
  );
};

export default TodoItemPage;
