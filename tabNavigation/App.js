import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import TelaInicial from './src/TelaInicial';
import ConversationScreen from './src/ConversationScreen';

const Navegador = createBottomTabNavigator({
  Home: { screen: TelaInicial },
  Conversa: { screen: ConversationScreen }
});

export default Navegador;