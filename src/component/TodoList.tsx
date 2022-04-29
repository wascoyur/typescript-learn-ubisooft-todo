import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../types/types';
import { TodoItem } from './TodoItem';

export interface ITodoItemProps {
  todo: ITodo;
  todos?: ITodo[];
  onClick: () => void;
}
const TodoList: FC<ITodoItemProps> = ({ todos }) => {
  const navigate = useNavigate();
  return (
    <div>
      TodoItem Single Page
      {todos?.map((todo) => (
        <TodoItem todo={todo} onClick={() => {}} />
      ))}
    </div>
  );
};

export default TodoList;
