import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
    title: string;
}

const Flashcard: React.FC<Props> = ({title}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid', 
        borderColor: 'gray',
        borderRadius: 20,
        elevation: 7,
        shadowRadius: 20,
        shadowColor: 'blue',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.3,
        width: 400,
        height: 400,
    },

    text: {
     textAlign: 'center',
    },
});

export default Flashcard;