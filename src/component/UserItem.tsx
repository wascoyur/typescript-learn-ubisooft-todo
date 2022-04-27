import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo, IUser } from '../types/types';

export interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}
export interface ITodoItemProps {
  todo: ITodo;
}
export const UserItem: FC<IUserItemProps> = ({ user, onClick }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/users/${user.id}`)}
      style={{
        display: 'flex',
        padding: '0.5rem',
        border: '2px solid gray',
      }}>
      {user.id}. {user.name} проживает в городе: {user.address.city}, по улице:{' '}
      {user.address.street}
    </div>
  );
};
