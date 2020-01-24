import React from 'react';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions'

// import { Container } from './styles';

export default function Directions({destination,origin,onReady}) {
  return (
    <MapViewDirections 
      origin={origin}
      destination={destination}
      onReady={onReady}
      apikey="AIzaSyDjQHoCPvlW0o-NYrd5UnjoL7ngtgiDhTA"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}
