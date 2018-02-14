import React from 'react';

import Map from '../';


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

const onChange = () => 0;

test('render a Map', () => {
  const wrapper = shallow(
    <Map
      dots={dots}
      onChange={onChange}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
