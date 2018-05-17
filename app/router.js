import React from 'react';
import { 
  StackNavigator, 
  TabNavigator, 
  SwitchNavigator 
} from "react-navigation";

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

import Home from "./screens/Home";
import Profile from "./screens/Profile";

export const SignedIn = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      // tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name="home" size={30} color={tintColor} />
      // )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      // tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name="user" size={30} color={tintColor} />
      // )
    }
  }
});