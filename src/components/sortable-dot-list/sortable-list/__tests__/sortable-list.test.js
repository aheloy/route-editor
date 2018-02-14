import React from 'react';

import SortableList from '../sortable-list';


const items = [
  {
    text: '1'
  },
  {
    text: '2'
  },
  {
    text: '3'
  }
];
const onSort = () => 0;
const onDelete = () => 0;


test('render a SortableList', () => {
  const wrapper = shallow(
    <SortableList
      items={items}
      onSort={onSort}
      onDelete={onDelete}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
