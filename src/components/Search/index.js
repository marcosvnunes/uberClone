import React, {useState}from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'

// import { Container } from './styles';

export default function Search(props) {
  const [searchFocused, setSearchFocused] = useState(false)
  const { onLocationSelected } = props;
  return (
    <GooglePlacesAutocomplete
      placeholder="Para Onde?"
      placeholderTextColor="#333"
      onPress={onLocationSelected}
      query={{
        key:"DIGITE AQUI SUA KEY DA API DO GOOGLE",
        language:'pt'
      }}
      textInputProps={{
        onFocus:() => { setSearchFocused({searchFocused:true})},
        onBur:() => { setSearchFocused({searchFocused:false})},
        autoCapitalize:"none",
        autoCorrect:false
      }}
      listViewDisplayed={searchFocused}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container:{
          position:'absolute',
          top: 60,
          width:'100%',
        },
        textInputContainer:{
          flex:1,
          backgroundColor:"transparent",
          height:54,
          marginHorizontal:20,
          borderTopWidth:0,
          borderBottomWidth:0          
        },
        textInput:{
          height:54,
          margin:0,
          borderRadius:0,
          paddingTop:0,
          paddingBottom:0,
          paddingLeft:20,
          paddingRight:20,
          marginTop:0,
          marginLeft:0,
          marginRight:0,
          elevation:5,
          borderWidth:1,
          borderColor:"#DDD",
          fontSize:18,
        },
        listView:{
          borderWidth:1,
          borderColor:'#DDD',
          backgroundColor:'#FFF',
          marginHorizontal:20,
          elevation:5,
          marginTop:10,

        },
        description:{
          fontSize:16,
        },
        row:{
          padding:20,
          height:58,
        },
      }}

    />
  );
}
