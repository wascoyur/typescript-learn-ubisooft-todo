import React, { FC, useState } from 'react';
import Card, { enumCardVariant } from '../component/Card';

const Cards: FC = () => {
  const [cardVariant, setCardVariant] = useState(enumCardVariant.outlined);

  return (
    <div>
      Cards
      <hr />
      <Card
        width='100px'
        height='200px'
        variant={cardVariant}
        onClick={(state) => setCardVariant(enumCardVariant.primary)}>
        <button>click</button>
      </Card>
    </div>
  );
};

export default Cards;
