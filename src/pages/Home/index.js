import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

import logoImg from '../../assets/logo.png';


const Home = () => {
    const goToCode = () =>{
        Actions.code()
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
            </View>
        
        </View>    


            
        
    )
}

export default Home;