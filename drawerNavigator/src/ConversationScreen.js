import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class ConversationScreen extends Component{

  static navigationOptions = ({navigation}) => ({
    drawerLabel:'Inicial',
    drawerIcon:({tintColor, focused})=>{        
      if(focused){
        return(
          <Image source={require('../assets/images/chat_on.png')} style={{width:20, height:20}} />
        );
      }
      else{
        return(
          <Image source={require('../assets/images/chat_off.png')} style={{width:20, height:20}} />
        );
      }        
    }
  });

    render(){
        return(
        <View>
            <Text>Tela de conversa com </Text>
        </View>
        );
    }
}