import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../types/types';

export interface ITodoItemProps {
  todo: ITodo;
  todos?: ITodo[];
  onClick: (todo: ITodo) => void;
}
export const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/todos/${todo.id}`, { state: { ...todo } });
      }}
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
