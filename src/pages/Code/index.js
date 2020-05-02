import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const Code = () => {
    const goToHome = () => {
        Actions.home()
    }
    return (
        <TouchableOpacity style={styles.container} onPress={backToHome} >
            <Text>Code</Text>
        </TouchableOpacity>
    )
}

export default Code;