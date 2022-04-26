import axios from 'axios'
import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../types/types';

const UserItemPage: FC<JSX.Element> = () => {
  const [user, setUser] = useState<IUser | null>();
  const navigate = useNavigate();
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
  return <div>userIitemPage</div>;
};

export default UserItemPage;
