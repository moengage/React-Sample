/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component, useEffect} from 'react';
import { View, Text } from 'react-native';
import {HomeScreen} from "./HomeScreen";
import ReactMoE from 'react-native-moengage';

export default App = () => {
  useEffect(() => {
    ReactMoE.initialize("Enter Your App Id");
  }, [])

  return (
    <View style={{flex: 1}}>
      <HomeScreen />
    </View>
  );
}