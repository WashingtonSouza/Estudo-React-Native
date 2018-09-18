import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ConfigScreen extends Component{

  static navigationOptions = ({navigation}) => ({
    tabBarLabel:'Configuration',
    tabBarIcon:({tintColor, focused})=>{        
      if(focused){
        return(
          <Image source={require('../assets/images/config_on.png')} style={{width:20, height:20}} />
        );
      }
      else{
        return(
          <Image source={require('../assets/images/config_off.png')} style={{width:20, height:20}} />
        );
      }        
    }
  });

  render(){
      return(
      <View style={styles.container}>
          <Text>Tela de configuração</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  }
});