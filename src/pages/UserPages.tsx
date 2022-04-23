import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { List } from '../component/List';
import { UserItem } from '../component/UserItem';
import { ITodo, IUser } from '../types/types';

const UserPages: FC<JSX.Element> = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    try {
      await axios
        .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
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
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
};

export default UserPages;
