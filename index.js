import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';

const App = () => (
    <Text>Some text</Text>
);

AppRegistry.registerComponent(appName, () => App);

