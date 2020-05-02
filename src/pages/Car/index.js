import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const Car = () => {
    const goToConfirm = () => {
        Actions.confirm()
    }
    return (
        <TouchableOpacity style={styles.container} onPress={goToConfirm} >
            <Text>Car</Text>
        </TouchableOpacity>
    )
}

export default Car();