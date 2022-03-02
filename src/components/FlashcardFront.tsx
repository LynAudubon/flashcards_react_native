import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PatternContext } from '../context/patternContext'

const FlashcardFront: React.FC = () => {
const { selectedPattern } = useContext(PatternContext);
    return (
      
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>{selectedPattern ? selectedPattern.example.algoName : null}</Text>
                <Text style={styles.text}>{selectedPattern ? selectedPattern.example.question: null}</Text>
            </View>
        </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid', 
        borderColor: 'cornflowerblue',
        borderRadius: 20,
        elevation: 7,
        shadowRadius: 20,
        shadowColor: 'blue',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.3,
        width: 550,
        height: 280,
        marginBottom: 10
    },

    header: {
        textAlign: 'center',
        padding: 10,
        color: 'white'
    },

    text: {
     textAlign: 'center',
     padding: 10
    },
});

export default FlashcardFront;