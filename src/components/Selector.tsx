import React, { useState } from 'react';
import {View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

import { useContext } from 'react';
import { PatternContext } from '../context/patternContext';
import storePatterns from '../store'

interface Props {
    store: Array<pattern>
}

type pattern = {
    title: string,
    desc: string
}

const Selector: React.FC<Props> = ({store}) => {
    const [ pickedPattern, setPickedPattern] = useState<any|string>('');
    const { selectedPattern, setSelectedPattern } = useContext(PatternContext);

    function findPatternObj(object, key, value) {
        let patternObj: {}|undefined;

        JSON.stringify(object, (_, nestedValue) => {
            if (nestedValue && nestedValue[key] === value) {
            patternObj = nestedValue;
            }
            return nestedValue;
        });
        console.log('obj', patternObj);
        console.log('value', value)
        return patternObj;
        };

        const selected = findPatternObj(storePatterns, "title", pickedPattern);
        console.log('newobj', selected);
        
        if(pickedPattern.length > 0) {
            console.log("inside pickedPattern", selectedPattern)
            setSelectedPattern(selected);
        };
    
   

    const pickerList = store.map((item, i) => {
        return (
                <Picker.Item key={i} label={item.title} value={item.title} />
            )
    });

     return (
        <View style={styles.container}>
            <Picker 
                selectedValue={pickedPattern}
                style={{height: 50, width: 550, color: 'gray'}}
                onValueChange={(itemValue) =>
                    setPickedPattern(itemValue)
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
        backgroundColor: 'purple',
        padding: 10
    },
    placeholder: {
        color: 'gray'
    }
})

export default Selector;
