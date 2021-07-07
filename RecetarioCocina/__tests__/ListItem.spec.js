import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListItem from '../src/components/ListItem';
const data = require('../src/db/recipes.json');
const {Recipes} = data;
const navigate = jest.fn();
const title = 'TRENDING';

test('ListItem navigates and renders correctly', () => {
  const {getByText, getAllByTestId} = render(
    <ListItem navigate={navigate} title={title} Recipes={Recipes} />,
  );
  const Title = getByText(title);
  expect(Title.props.children).toEqual(title);
  const Touchable = getAllByTestId('btn');
  expect(Touchable.length).toEqual(Recipes.length);
  fireEvent.press(Touchable[0]);
  const item = Recipes[0];
  expect(navigate).toHaveBeenCalled();
  expect(navigate).toHaveBeenCalledWith('Details' ,{item, title});
});
