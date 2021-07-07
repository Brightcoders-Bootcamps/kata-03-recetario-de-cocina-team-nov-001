import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import Details from '../src/screens/Details';
const goBack = jest.fn();
const params = {
  title: 'TRENDING',
  item: {
    name: 'Pizza',
    img:'https://www.elmejornido.com/sites/site.prod2.elmejornido.com/files/2018-09/qv_brands_HotPocketPepPizza_0.jpg',
  },
};

test('Details component renders correctly', async () => {
  const {getByTestId} = render(
    <Details navigation={{goBack}} route={{params}} />,
  );
  await waitFor(() => getByTestId('details screen'));
});
