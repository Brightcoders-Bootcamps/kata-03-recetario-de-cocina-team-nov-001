import React from 'react';
import {View} from 'react-native';
import Image from '../components/Image';
import DishDetails from '../components/DishDetails';
function Details({navigation: {goBack}, route: {params}}) {
  return (
    <View>
      <Image
        title={params.title}
        name={params.item.name}
        img={params.item.img}
        goBack={goBack}
      />
      <DishDetails
        servings={params.item.servings}
        data={params.item.ingredients}
      />
    </View>
  );
}

export default Details;
