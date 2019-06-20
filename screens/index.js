import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';

import SplashScreen from 'screens/SplashScreen';
import Home from 'screens/Home';

// Unauthenticated
import Signup from 'screens/Unauthenticated/Signup';
import PhoneNumber from 'screens/Unauthenticated/PhoneNumber';
import Verification from 'screens/Unauthenticated/Verification';
import Welcome from 'screens/Unauthenticated/Welcome';
import Choose from 'screens/Unauthenticated/Choose';


// Unauthenticated Login
import Login from 'screens/Unauthenticated/Login';
import Reset from 'screens/Unauthenticated/Login/Password/Reset';
import Check from 'screens/Unauthenticated/Login/Password/Check';
import Change from 'screens/Unauthenticated/Login/Password/Change';

// Authenticated
import Record from 'screens/Authenticated/Record';
import Preview from 'screens/Authenticated/Preview';
import Create from 'screens/Authenticated/Create';
import Shop from 'screens/Authenticated/Shop';
import CreditCard from 'screens/Authenticated/Shop/CreditCard';

import Profile from 'screens/Authenticated/Profile';
import Edit from 'screens/Authenticated/Profile/Edit';

// Authenticated Flow
import Categories from 'screens/Authenticated/Flow/Categories';
import Pro from 'screens/Authenticated/Flow/Pro';
import Category from 'screens/Authenticated/Flow/Category';
import Offer from 'screens/Authenticated/Flow/Offer';
import Search from 'screens/Authenticated/Flow/Search';

import TabBar from 'components/TabBar';

export const CategoryNavigator = createFluidNavigator({
  Category,
  Offer,
}, { headerMode: 'none', navigationOptions: {gesturesEnabled: true, tabBarVisible: false } })


export const FlowMember = createFluidNavigator({
  Categories,
  CategoryNavigator,
}, { headerMode: 'none', navigationOptions: {gesturesEnabled: true } })

FlowMember.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions =  { gesturesEnabled: true }

  if (routeName === 'CategoryNavigator' || routeName === 'Category' || routeName === 'Offer') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

export const FlowPro = createFluidNavigator({
  Pro,
  CategoryNavigator,
}, { headerMode: 'none', navigationOptions: {gesturesEnabled: true } })

export const ProfileNavigator = createStackNavigator({
  Profile,
  Edit,
}, { mode: 'modal', headerMode: 'none', navigationOptions: { gesturesEnabled: true }})


export const LoginNavigator = createStackNavigator({
  Login,
  Reset,
  Check,
  Change,
}, { headerMode: 'none', navigationOptions: { gesturesEnabled: true }})

export const Authenticated = createBottomTabNavigator({
  FlowMember,
  FlowPro,
  Shop,
  CreditCard,
  ProfileNavigator,
}, { mode: 'modal', headerMode: 'none', tabBarComponent: TabBar, lazy: false, navigationOptions: { gesturesEnabled: false }})

export const Unauthenticated = createStackNavigator({
  LoginNavigator,
  Signup,
  PhoneNumber,
  Verification,
  Welcome,
  Choose,
}, { headerMode: 'none' })

export const App = createStackNavigator({
  Home,
  Authenticated,
  Unauthenticated,
  Record,
  Preview,
  Create,
  Search,
}, { mode: 'modal', headerMode: 'none' })

export const SplashNavigator = createFluidNavigator({
  // Record,
  Create,
  SplashScreen,
  App,
}, { headerMode: 'none', navigationOptions: {gesturesEnabled: false } })

export default createAppContainer(SplashNavigator)
