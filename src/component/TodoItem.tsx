import React, { FC } from 'react';
import { ITodoItemProps } from '../component/TodoList';

export const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const handleCheck = () => console.log(`${'handleCheck'}`);
  return (
    <div
      style={{
        display: 'flex',
        padding: '0.5rem',
        border: '2px solid gray',
      }}>
      <input type='checkbox' checked={todo.completed} onChange={handleCheck} />
      {todo.id}. Название задачи: {todo.title}
    </div>
  );
};
