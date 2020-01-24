import React from 'react';
import { View } from 'react-native';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText} from './styles';
import uberX from '../../assets/uberx.png'

export default function Details({distance}) {
  function getPrice(){
    let price = distance * 2.5;
    if(price < 5) price = 5
    price = Math.floor(price);
    return `R$${price},00`
    
  }
  return (
    <Container>
      <TypeTitle>Popular</TypeTitle>
      <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>
      <TypeImage source={uberX}></TypeImage>
      <TypeTitle>UberX</TypeTitle>
      <TypeDescription>{getPrice()}</TypeDescription>

      <RequestButton onPress={()=>{}}>
        <RequestButtonText>Solicitar UBERX</RequestButtonText>
      </RequestButton>
    </Container>
  );
}
