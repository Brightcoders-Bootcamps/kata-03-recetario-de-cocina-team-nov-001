import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Image from '../src/components/Image';
const MockImg = 'https://img.buzzfeed.com/video-api-prod/assets/27a70b9f9d8342d3a878333e84af3a23/BFV5796_MeatballSubBake-Thumb1080.jpg';
test('Image component renders image and navigates back correctly', () => {
  const {getByTestId} = render(<Image img={MockImg} />);
  const Img = getByTestId('Img');
  expect(Img.props.source.uri).toEqual(MockImg);
});
