import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo, IUser } from '../types/types';

export interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

export const UserItem: FC<IUserItemProps> = ({ user }) => {
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
