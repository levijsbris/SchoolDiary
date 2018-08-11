/**
  * School Tool App
  * https://github.com/facebook/react-native
  * *
  * @format
  * @flow
  */

 import React, {Component} from 'react';
 import { createStackNavigator } from 'react-navigation';
 import {HomeScreen} from './screens/HomeScreen';
 import {DetailsScreen} from './screens/DetailsScreen';
 
 const RootStack = createStackNavigator(
   {
     Home: HomeScreen,
     Details: DetailsScreen,
   },
   {
     initialRouteName: 'Home',
   }
 );
 
 export default class App extends React.Component {
   render() {
     return <RootStack />;
   }
 }
