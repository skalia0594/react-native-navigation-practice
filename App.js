import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {SignIn, CreateAccount, Home , Search, Details, Search2, Profile, SignOut} from './Screens'
import {AuthContext} from './context';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
// const Tabs = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen 
      name='Home'
      component= {Home}
      options={{ animationEnabled: false }}
    />
    <HomeStack.Screen 
      name='Details'
      component = {Details}
      options = {({ route }) => ({
        title: route.params.name, 
        animationEnabled : false
      })}
    />
  </HomeStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen 
      name='Search'
      component= {Search}
    />
    <SearchStack.Screen 
      name='Search2'
      component= {Search2}
      options={{ animationEnabled: false }}
    />
  </SearchStack.Navigator>
)
const  TabsScreen = () => (
  <Tabs.Navigator>
        <Tabs.Screen 
          name= 'Home'
          component = {HomeStackScreen}  
        />
        <Tabs.Screen 
          name= 'Search'
          component = {SearchStackScreen}  
        />
      </Tabs.Navigator>
)
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen 
      name = 'Profile'
      component = {Profile}
    />
  </ProfileStack.Navigator>
)
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen 
      name = 'SignIn'
      component = {SignIn}
      options = {{ title : 'Sign In'}}
    />
    <AuthStack.Screen 
      name = 'CreateAccount'
      component = {CreateAccount}
      options = {{ title : 'Create Account' , animationEnabled: false}}
    />
  </AuthStack.Navigator>
)
const DrawerScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen 
      name= 'Home'
      component = {TabsScreen}
    />
    <Drawer.Screen 
      name= 'Profile'
      component = {ProfileStackScreen}
    />
    <Drawer.Screen 
      name= 'Signout'
      component = {SignOut}
      options = {{title: 'Log out'}}
    />
  </Drawer.Navigator>
)
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode='none' >
    {
      userToken === true ? (
      <RootStack.Screen 
        name = 'App'
        component = {DrawerScreen}
        options={{ animationEnabled: false }}
      />): (
      <RootStack.Screen 
        name = 'Auth'
        component = {AuthStackScreen}
        options={{ animationEnabled: false }}
      />) 
    }
  </RootStack.Navigator>
)

export default function App() {
  const [userToken, setUserToken] = React.useState(false);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => { setUserToken(true) },
      createAccount: () => { setUserToken(true) },
      signOut: () => { setUserToken(false) },
    }
  
  }, [])

    return (
      <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            <RootStackScreen userToken={userToken}/>
          </NavigationContainer>
      </AuthContext.Provider>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
