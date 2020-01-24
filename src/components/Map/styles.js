import styled from 'styled-components/native';


export const LocationBox = styled.View`
  background:#fff;
  elevation:1;
  border:1px solid;
  border-radius:3px;
  flex-direction:row;
  margin-top:20px;
`;
export const LocationBoxTex = styled.Text`
  margin:8px 10px;
  font-size:14px;
  color:#333;
`;


export const LocationTimeBox = styled.View`
  background:#222;
  padding:3px 8px;
`;
export const LocationTimeText = styled.Text`
  color:#fff;
  font-size:12px;
  text-align:center;
`;
export const LocationTimeTextSmall = styled.Text`
  color:#fff;
  font-size:12px;
  text-align:center;
`;

export const Back = styled.TouchableOpacity`
  position:absolute;
  top:60px;
  left:20px;
`;