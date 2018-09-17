import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import TelaInicial from './src/TelaInicial';
import ConversationScreen from './src/ConversationScreen';

const Navegador = createStackNavigator({
  Home: { screen: TelaInicial },
  Conversa: { screen: ConversationScreen }
});

export default Navegador;