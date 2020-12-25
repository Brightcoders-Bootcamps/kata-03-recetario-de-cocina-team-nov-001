import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import DishDetails from '../src/components/DishDetails';
const MockServings = 5;
const MockData = [
  {name: 'pizza', quantity: '2'},
  {name: 'hamburger', quantity: '6'},
];

test('DishDetails component render list correctly', () => {
  const {getByText, getByTestId, getAllByTestId} = render(
    <DishDetails data={MockData} servings={MockServings} />,
  );
  const Title = getByText('Ingredients');
  const Subtitle = getByTestId('subtitle');
  expect(Title.props.children).toContain('Ingredients');
  expect(Subtitle.props.children).toEqual(['for ', MockServings, ' servings']);
  const item = getAllByTestId('item');
  expect(item.length).toEqual(MockData.length);
  const name = getAllByTestId('name');
  const quantity = getAllByTestId('quantity');
  expect(name[0].props.children).toEqual(MockData[0].name);
  expect(quantity[0].props.children).toEqual(MockData[0].quantity);
  expect(name[1].props.children).toEqual(MockData[1].name);
  expect(quantity[1].props.children).toEqual(MockData[1].quantity);
});
