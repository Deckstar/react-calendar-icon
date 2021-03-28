import React from 'react';
import IconDiv from './IconDiv';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = renderer.create(<IconDiv />).toJSON();
  expect(div).toMatchSnapshot();
});
