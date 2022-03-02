import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PatternContext } from '../context/patternContext'

const FlashcardBack: React.FC = () => {
const { selectedPattern } = useContext(PatternContext);
    return (
      
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{selectedPattern? selectedPattern.example.solution : null}</Text>
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
        padding: 10,
        marginBottom: 10
    },

    text: {
     textAlign: 'center',
    },
});

export default FlashcardBack;