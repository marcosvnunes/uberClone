import React, { useEffect, useState }from 'react';
import  MapView,{ Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import {Image } from 'react-native';

import { 
  Back,
  LocationBox,
  LocationBoxTex, 
  LocationTimeBox, 
  LocationTimeText, 
  LocationTimeTextSmall 
} from './styles';

import Search from '../Search';
import Directions from '../Directions';
import Details from '../Details';

import backImage from '../../assets/back.png';
import markerImage from '../../assets/marker.png';
Geocoder.init('AIzaSyDjQHoCPvlW0o-NYrd5UnjoL7ngtgiDhTA')

export default function Map() {
  const [region,setRegion] = useState(null);
  const [destination, setDestination] = useState(null);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [location, setLocation] = useState('');
  const latitude = -22.9997747;
  const longitude = -44.3049395;
  
    
  useEffect(()=>{
    setRegion({
      latitude,
      longitude,
      latitudeDelta:0.0143,
      longitudeDelta:0.0134,
    })
    async function getGeoCoder(){
    
      const response = await Geocoder.from({latitude,longitude});
      const address = response.results[0].formatted_address;
      let local = address.substring(0,address.indexOf(','))
      setLocation(local)
    }
    getGeoCoder()
  },[])

  function handleLocationSelected(data, { geometry }){
    const { location: {lat: latitude, lng: longitude} } = geometry ;
    setDestination({
      latitude,
      longitude,
      title:data.structured_formatting.main_text,
    })
  }

  function handleBack(){
    setDestination(null);
  }
  
  return (
    <>
    <MapView 
      style={{flex:1}}
      region={region}
      showsUserLocation
      loadingEnabled
      ref={el => this.mapView = el}
    > 
    {
      destination && (
        <>
          <Directions 
            origin={region}
            destination={destination}
            onReady={result =>{
              setDuration(Math.floor(result.duration))
              setDistance(result.distance.toFixed(2))

              if(mapView){
                this.mapView.fitToCoordinates(result.coordinates,{
                  edgePadding:{
                    right:50,
                    left:50,
                    top:50,
                    bottom:350,
                  }
                });
              }
            }}
          />
          <Marker coordinate={destination} anchor={{ x:0, y:0 }} image={markerImage} >
            <LocationBox>
              <LocationBoxTex>{destination.title}</LocationBoxTex>
            </LocationBox>
          </Marker>
          <Marker coordinate={region} anchor={{ x:0, y:0 }} >
            <LocationBox>
              <LocationTimeBox>
                <LocationTimeText>{duration}</LocationTimeText>
                <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
              </LocationTimeBox>
              <LocationBoxTex>{location}</LocationBoxTex>
            </LocationBox>
          </Marker>
        </>)
    }

    </MapView>
    {
      destination ? 
      <>
        <Back onPress={handleBack} >
          <Image source={backImage} />
        </Back>
        <Details distance={distance}/>
      </>  
      : <Search onLocationSelected={handleLocationSelected}/>
      
    }
    
    </>
  );
}

 