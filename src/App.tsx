import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import './App.css';
import Card, { enumCardVariant } from './component/Card';
import EventExample from './component/EventExample';
import { List } from './component/List';
import { TodoItem, UserItem } from './component/UserItem';
import UserList from './component/UserList';
import { ITodo, IUser } from './types/types';

function App() {
  const [cardVariant, setCardVariant] = useState(enumCardVariant.outlined);
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchUsers = async () => {
    try {
      await axios
        .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data));
    } catch (error) {
      alert(error);
    }
  };
  const fetchTodos = async () => {
    try {
      await axios
        .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?limit=10')
        .then((res) => setTodos(res.data));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  return (
    <div className='App'>
      Home
      <Card
        width='100px'
        height='200px'
        variant={cardVariant}
        onClick={(state) => setCardVariant(enumCardVariant.primary)}>
        <button>click</button>
      </Card>
      <EventExample />
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
      <EventExample />
    </div>
  );
}

export default App;
