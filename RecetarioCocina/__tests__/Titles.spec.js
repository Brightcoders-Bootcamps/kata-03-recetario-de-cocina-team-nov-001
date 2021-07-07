import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Titles from '../src/components/Titles';
const Mocktitle = 'title prop';
const MockName = 'name prop';

test('Titles Component render title and name prop correctly', () => {
  const {getByText} = render(<Titles name={MockName} title={Mocktitle} />);
  const titleText = getByText(Mocktitle);
  const nameText = getByText(MockName);
  expect(titleText.props.children).toEqual(Mocktitle);
  expect(nameText.props.children).toEqual(MockName);
});
