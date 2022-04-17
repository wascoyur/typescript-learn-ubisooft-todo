import React, { FC, useState } from 'react';

export enum enumCardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface ICardProps {
  width: string;
  height: string;
  children: React.ReactChild | React.ReactNode;
  variant: enumCardVariant;
  onClick: (number: number) => void;
}

export const Card: FC<ICardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const [number, setNumber] = useState(0);

  return (
    <div
      onClick={() => onClick(number)}
      style={{
        width,
        height,
        border:
          variant === enumCardVariant.outlined ? '2px solid gray' : 'none',
        background: variant === enumCardVariant.primary ? 'lightgray' : '',
      }}>
      <h2>Card</h2>
      {children}
    </div>
  );
};

export default Card;
