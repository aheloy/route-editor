import React from 'react';

import RouteEditor from '../';


test('render a RouteEditor', () => {
  const wrapper = shallow(
    <RouteEditor />
  );
  expect(wrapper).toMatchSnapshot();
});
