import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';

import Home from 'screens/Home';

// Unauthenticated
import Signup from 'screens/Unauthenticated/Signup';
import Verification from 'screens/Unauthenticated/Verification';
import Welcome from 'screens/Unauthenticated/Welcome';
import Choose from 'screens/Unauthenticated/Choose';

// Authenticated
import Profile from 'screens/Authenticated/Profile';
import Record from 'screens/Authenticated/Record';
import Shop from 'screens/Authenticated/Shop';

// Authenticated Flow
import Categories from 'screens/Authenticated/Flow/Categories';
import Category from 'screens/Authenticated/Flow/Category';
import Offer from 'screens/Authenticated/Flow/Offer';

import TabBar from 'components/TabBar';

export const FlowNavigator = createFluidNavigator({
  Categories: { screen : Categories },
  Category: { screen : Category },
  Offer: { screen : Offer },
}, { headerMode: 'none', navigationOptions: { gesturesEnabled: true }})

export const AuthenticatedNavigator = createBottomTabNavigator({
  Flow: { screen : FlowNavigator },
  Profile: { screen : Profile },
  Record: { screen : Record },
  Shop: { screen : Shop },
}, { mode: 'modal', headerMode: 'none', tabBarComponent: TabBar, navigationOptions: { gesturesEnabled: true }})

export const UnauthenticatedNavigator = createStackNavigator({
  Signup: { screen : Signup },
  Verification: { screen : Verification },
  Welcome: { screen : Welcome },
  Choose: { screen : Choose },
}, { headerMode: 'none' })

export const AppNavigator = createStackNavigator({
  Home: { screen : Home },
  Unauthenticated: { screen : UnauthenticatedNavigator },
  Authenticated: { screen: AuthenticatedNavigator },
}, { mode: 'modal', headerMode: 'none' })

export default createAppContainer(AppNavigator);
