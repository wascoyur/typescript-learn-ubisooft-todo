import axios from 'axios'
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../types/types';

interface IUserParams {
  id: string;
}

const UserIitemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();

  const fetchUser = async () => {
    try {
      await axios
        .get<IUser>(`http://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((res) => setUser(res.data));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '5rem',
          justifyContent: 'right',
          alignItems: 'center',
        }}>
        <h1>userIitemPage</h1>
        <button>Back</button>
        {}
        <div>{user?.email}</div>
        <h3>{user?.name}</h3>
      </div>
    </div>
  );
};

export default UserIitemPage;
