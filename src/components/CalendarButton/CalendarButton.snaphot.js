import React from 'react';
import CalendarButton from './CalendarButton.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<CalendarButton header='---' text='+'/>).toJSON();
  expect(tree).toMatchSnapshot();
});
