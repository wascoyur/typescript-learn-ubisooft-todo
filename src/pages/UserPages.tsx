import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '../component/List';
import { UserItem } from '../component/UserItem';
import { ITodo, IUser } from '../types/types';

const UserPages: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const hisory = useNavigate();

  const fetchUsers = async () => {
    try {
      await axios
        .get<IUser[]>('http://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      UserPages
      <hr />
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={(user) => hisory(`/users/${user.id}`)}
            user={user}
            key={user.id}
          />
        )}
      />
    </div>
  );
};

export default UserPages;
