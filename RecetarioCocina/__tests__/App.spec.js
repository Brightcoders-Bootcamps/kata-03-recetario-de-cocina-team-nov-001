import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import App from '../App';

test('App renders correctly', async () => {
  const {getByTestId} = render(<App />);
    await waitFor(()=> getByTestId('index page'))
});
