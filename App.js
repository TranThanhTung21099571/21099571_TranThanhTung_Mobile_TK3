import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Screen01 from './screens/Screen01';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({f}) => {
          let source;
          if(route.name === 'Home')
            source = require('./assets/image/homeicon.png');
          else if(route.name === 'Explore')
            source = require('./assets/image/exploreicon.png');
          else if(route.name === 'Search')
            source = require('./assets/image/searchicon.png');
          else if(route.name === 'Profile')
            source = require('./assets/image/profileicon.png');
          return (
            <Image style={{height: 35, width: 35,}} source={source}></Image>
          );
        },
        tabBarStyle: {
          backgroundColor: '#5958b2',
          height: '15%',
          padding: 20,
        }
      })}>
        <Tab.Screen name='Home' component={Screen01} options={{title: 'Home'}}></Tab.Screen>
        <Tab.Screen name='Explore' component={Screen01} options={{title: 'Explore'}}></Tab.Screen>
        <Tab.Screen name='Search' component={Screen01} options={{title: 'Search'}}></Tab.Screen>
        <Tab.Screen name='Profile' component={Screen01} options={{title: 'Profile'}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
