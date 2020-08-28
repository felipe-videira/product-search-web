import React from 'react';
import renderer from 'react-test-renderer';
import ItemDetails from '../../pages/items/[id]';
import itemDetailsProps from '../../__mocks__/data/itemDetailsProps.json';

describe('ItemDetails', () => {
  it('Should render without crashing', () => {
    const tree = renderer.create(<ItemDetails {...itemDetailsProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
