import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import ConfigScreenApp from './ConfigScreenApp';
import ConfigScreenProfile from './ConfigScreenProfile';

const Navegador = createDrawerNavigator({
        ConfigScreenApp:{ screen:ConfigScreenApp },
        ConfigScreenProfile:{ screen:ConfigScreenProfile }
    },
    { tabBarOptions: { showIcon:true },   
});


export default Navegador;