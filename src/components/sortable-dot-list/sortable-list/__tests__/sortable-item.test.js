import React from 'react';

import SortableItem from '../sortable-item';


const onDelete = () => 0;


test('render a SortableItem', () => {
  const wrapper = shallow(
    <SortableItem onDelete={onDelete}>
      123
    </SortableItem>
  );
  expect(wrapper).toMatchSnapshot();
});
