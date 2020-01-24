import React from 'react';
import { View } from 'react-native';

import Map from './components/Map'
// import { Container } from './styles';

export default function App() {
  return (
    <View  style={{flex:1}}>
      <Map />
    </View>
  );
}