import React, { Component } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

export default class TelaInicial extends Component{
  
  static navigationOptions = ({navigation}) => ({
    tabBarLabel:'Inicial',
    tabBarIcon:({tintColor, focused})=>{        
      if(focused){
        return(
          <Image source={require('../assets/images/home_on.png')} style={{width:20, height:20}} />
        );
      }
      else{
        return(
          <Image source={require('../assets/images/home_off.png')} style={{width:20, height:20}} />
        );
      }        
    }
  });
  
    constructor(props){
      super(props);
      this.state ={nome:''};
  
      this.conversar = this.conversar.bind(this);
    }
  
    conversar(){
      this.props.navigation.navigate('Conversa', {
        nome: this.state.nome
      });
    }
    
    render() {
      return (
        <View style={styles.container}>
          <Text>Tela Inicial</Text>          
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
})

// <TextInput style={{height:40, borderWidth:1, borderColor:'#000000', width:200}} placeholder='Qual seu nome?' onChangeText={(nome)=> this.setState({nome})} />
//           <Button title='Abrir DrawerNavigator' onPress={()=> this.props.navigation.navigate('DrawerToggle')} />