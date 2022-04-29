import React, { FC } from 'react';
import { ITodoItemProps } from '../component/TodoList';

export interface ITodoItem {
  onClick: () => void;
}

export const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0.5rem',
        border: '2px solid gray',
      }}>
      <input type='checkbox' checked={todo.completed} />
      {todo.id}. Название задачи: {todo.title}
    </div>
  );
};
