import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Icons from '../src/components/Icons';
const MockGoBack = jest.fn();
test('Icons component works as expected', () => {
  const {getByTestId} = render(<Icons goBack={MockGoBack} />);
  const CloseBtn = getByTestId('closeBtn');
  fireEvent.press(CloseBtn);
  expect(MockGoBack).toHaveBeenCalled();
  expect(MockGoBack).toHaveBeenCalledTimes(1);
  const HeartBtn = getByTestId('HeartBtn');
  const item1 = 'hearto';
  const item2 = 'heart';
  expect(HeartBtn.props.children[0].props.name).toEqual(item1);
  fireEvent.press(HeartBtn);
  expect(HeartBtn.props.children[0].props.name).toEqual(item2);
});
