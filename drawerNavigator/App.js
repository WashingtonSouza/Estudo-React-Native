import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import TelaInicial from './src/TelaInicial';
import ConversationScreen from './src/ConversationScreen';
import ConfigScreen from './src/configScreen';

const Navegador = createDrawerNavigator({
  Home: { screen: TelaInicial },
  Conversa: { screen: ConversationScreen },
  Config: {screen: ConfigScreen}
});

export default Navegador;