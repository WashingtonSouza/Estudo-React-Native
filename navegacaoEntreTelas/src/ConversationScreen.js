import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ConversationScreen extends Component{

    static navigationOptions = ({navigation}) => ({
      title: navigation.state.params.nome
    });
  
    render(){
      return(
        <View>
          <Text>Tela de conversa com {this.props.navigation.state.params.nome}</Text>
        </View>
      );
    }
  }