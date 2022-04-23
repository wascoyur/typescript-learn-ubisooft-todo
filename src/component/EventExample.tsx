import React, { FC, useRef, useState } from 'react';

export const EventExample: FC = () => {
  const [field, setField] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setField(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(`${'drag'}`);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log(`${'isDrop'}`);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDrag(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(`${'Leave'}`);
    setIsDrag(false);
  };

  return (
    <div>
      EventExample
      <input id='field2' ref={inputRef} />
      <input id='field' ref={inputRef} placeholder='useRef' />
      <button onClick={handleClick}>button</button>
      <hr></hr>
      <div
        draggable
        onDrag={handleDrag}
        onDragLeave={handleDragLeave}
        style={{
          width: '3rem',
          height: '4rem',
          backgroundColor: 'gray',
          marginBottom: '0.25rem',
        }}></div>
      <div
        draggable
        onDrag={handleDrag}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          width: '3rem',
          height: '4rem',
          backgroundColor: isDrag ? 'green' : 'gray',
          marginBottom: '0.25rem',
        }}></div>
    </div>
  );
};

export default EventExample;
