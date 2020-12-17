
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransaction from './screens/BookTransaction';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component {
  render(){
  return (
    
     <AppContainer/>
    
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransaction},
search:{screen:SearchScreen}})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
