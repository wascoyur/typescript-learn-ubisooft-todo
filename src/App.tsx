import { useState } from 'react';
import './App.css';
import Card, { enumCardVariant } from './component/Card';
import UserList from './component/UserList';
import { IUser } from './types/types';

function App() {
  const [cardVariant, setCardVariant] = useState(enumCardVariant.outlined);
  const users: IUser[] = [
    {
      id: 1,
      name: 'yur',
      email: 'q@mail.ru',
      address: { city: 'Moscow', street: 'Red Square', zip: 614000 },
    },
    {
      id: 2,
      name: 'wer',
      email: 'q@gmail.ru',
      address: { city: 'Spb', street: 'Smolenskaya', zip: 630000 },
    },
  ];

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
      <UserList users={users} />
    </div>
  );
}

export default App;
