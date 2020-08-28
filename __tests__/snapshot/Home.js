import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages';

describe('Home', () => {
  it('Should render without crashing', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
