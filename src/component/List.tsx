import React, { FC } from 'react';
import { UserItem } from './UserItem';
import { UserListProps } from './UserList';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
