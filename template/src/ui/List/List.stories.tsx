import React from 'react';
import { List } from './List';

export default {
  title: 'UI/List',
};

const ListData = ['Item 1', 'Item 2', 'Item 3'];

export const Default = () => <List items={ListData} />;
