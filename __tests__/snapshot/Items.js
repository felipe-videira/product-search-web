import React from 'react';
import renderer from 'react-test-renderer';
import Items from '../../pages/items';
import itemsProps from '../../__mocks__/data/itemsProps.json';

describe('Items', () => {
  it('Should render without crashing', () => {
    const tree = renderer.create(<Items {...itemsProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
