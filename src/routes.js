import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './pages/Home';
import Code from './pages/Code';
import Car from './pages/Car';
import Confirm from './pages/Confirm';
 
const Routes = () => (
    <Router>
        <Scene key="root" >
            <Scene key="home" component={Home} Initial = {true} />
            <Scene key="code" component={Code} title="Code" />
            <Scene key="car" component={Car} title="Car" />
            <Scene key="confirm" component={Confirm} title="Confirm" />
        </Scene>
    </Router>
)

export default Routes;