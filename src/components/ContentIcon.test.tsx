import React from 'react';
import ContentIcon from './ContentIcon';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = renderer
    .create(<ContentIcon header="" footer="" value="" />)
    .toJSON();
  expect(div).toMatchSnapshot();
});
