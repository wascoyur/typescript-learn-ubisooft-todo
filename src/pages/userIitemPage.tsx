import axios from 'axios'
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types'


const UserIitemPage: FC<JSX.Element> = () => {
  const [user, setUser] = useState<IUser|null>();

  const fetchUser = async () => {
    try {
      await axios
        .get<IUser>(`https://jsonplaceholder.typicode.com/user/${id}`)
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

export default UserIitemPage;
