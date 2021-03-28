import React from 'react';
import FooterDiv from './FooterDiv';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = renderer.create(<FooterDiv />).toJSON();
  expect(div).toMatchSnapshot();
});
