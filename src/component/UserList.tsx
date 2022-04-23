import React, { FC } from 'react';
import { Interface } from 'readline';
import { IUser } from '../types/types';
import { UserItem } from './UserItem';

export interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};
export default UserList;
