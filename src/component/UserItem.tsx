import React, { FC } from 'react';
import { IUser } from '../types/types';

export interface IUserItemProps {
  user: IUser;
}
export const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0.5rem',
        border: '2px solid gray',
      }}>
      {user.id}.{user.name} проживает в городе: {user.address.city}, по улице:{' '}
      {user.address.street}
    </div>
  );
};
