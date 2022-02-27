import React, { useState } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import FlashCards from '../screens/Flashcards';

interface Props {
    store: Array<pattern>
}

type pattern = {
    title: string,
    desc: string
}

const Selector: React.FC<Props> = ({store}) => {
    const [selectedPattern, setSelectedPattern] = useState<any>('')

    const pickerList = store.map((item, i) => {
        return (
                <Picker.Item key={i} label={item.title} value={item.title} />
            )
    });

     return (
         
        <View style={styles.container}>
            <Picker 
                selectedValue={selectedPattern}
                style={{height: 50, width: 550, color: 'gray'}}
                onValueChange={(itemValue) =>
                    setSelectedPattern(itemValue)
                }>
            <Picker.Item label= "Select a pattern..." value="" />
            {pickerList}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        backgroundColor: 'purple'
    },
    placeholder: {
        color: 'gray'
    }
})

export default Selector;