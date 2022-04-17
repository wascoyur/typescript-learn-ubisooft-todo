import { useState } from 'react';
import './App.css';
import Card, { enumCardVariant } from './component/Card';

function App() {
  const [cardVariant, setCardVariant] = useState(enumCardVariant.outlined);
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
    </div>
  );
}

export default App;
