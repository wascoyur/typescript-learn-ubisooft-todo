import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../component/List';
import { UserItem } from '../component/UserItem';
import { IUser } from '../types/types';

interface IUserItemPageParam {
  id: string;
}

const UserIitemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<IUserItemPageParam>();

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

  return (
    <div>
      userIitemPage
      <div>
        UserPages
        <hr />
        <List
          item={user}
          renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
        />
      </div>
    </div>
  );
};

export default UserIitemPage;
