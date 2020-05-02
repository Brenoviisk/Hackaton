import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const Confirm = () => {
    const goToHome = () => {
        Actions.home()
    }
    return (
        <TouchableOpacity style={styles.container} onPress={goToHome} >
            <Text>Confirm</Text>
        </TouchableOpacity>
    )
}

export default Confirm();