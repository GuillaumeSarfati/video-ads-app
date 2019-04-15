import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';

import Home from 'screens/Home';
import Category from 'screens/Category';
import Advertisement from 'screens/Advertisement';

export default createAppContainer(createFluidNavigator({
  Home: { screen : Home },
  Category: { screen : Category },
  Advertisement: { screen : Advertisement },
},{ navigationOptions: { gesturesEnabled: true }}));
