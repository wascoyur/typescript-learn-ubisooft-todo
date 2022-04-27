import React, { FC } from 'react';
import { ITodo } from '../types/types';

export interface TodoItemProps {
  todo: ITodo;
}

const TodoList: FC<TodoItemProps> = ({ todo }) => {
  return <div>TodoList</div>;
};

export default TodoList;
