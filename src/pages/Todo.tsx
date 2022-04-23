import React, { FC, useState } from 'react';
import { List } from '../component/List';
import { TodoItem } from '../component/UserItem';
import { ITodo } from '../types/types';

const Todo: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  return (
    <div>
      Todo:FC
      <hr />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default Todo;
