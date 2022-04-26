import React, { FC } from 'react';
import { ITodo, IUser } from '../types/types';

export interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}
export interface ITodoItemProps {
  todo: ITodo;
}
export const UserItem: FC<IUserItemProps> = ({ user, onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0.5rem',
        border: '2px solid gray',
      }}
      onClick={(user) => onClick(user)}>
      {user.id}.{user.name} проживает в городе: {user.address.city}, по улице:{' '}
      {user.address.street}
    </div>
  );
};

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
      Задача № {todo.id} Название задачи: {todo.title}
    </div>
  );
};