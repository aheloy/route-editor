import React from 'react';

import MainPage from '../';


test('render a MainPage', () => {
  const wrapper = shallow(
    <MainPage />
  );
  expect(wrapper).toMatchSnapshot();
});
