import React from 'react';

import SortableDotList from '../';


const dots = [
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

const onAdd = () => 0;
const onDelete = () => 0;
const onSort = () => 0;


test('render a SortableDotList', () => {
  const wrapper = shallow(
    <SortableDotList
      dots={dots}
      onAdd={onAdd}
      onDelete={onDelete}
      onSort={onSort}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
