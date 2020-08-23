import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages/index';

test('Render home page', () => {
  const component = renderer.create(<Home />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
