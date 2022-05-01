import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../types/types';

const UserItemPage: FC = () => {
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
      <div>
        <h1>Страница даных пользователя</h1>
        <h3> {`Имя ${user?.name}`}</h3>
        <div>
          {`Адрес проживания: город ${user?.address.city}, улица ${user?.address.street}`}
        </div>
      </div>
    </div>
  );
};

export default UserItemPage;
