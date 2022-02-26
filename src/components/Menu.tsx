import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import globalStyles from '../constants/globalStyles'

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={[globalStyles.menu, {flexDirection: "row"}]}>
            <TouchableOpacity
            onPress={()=> {
                navigation.navigate('Common Patterns')
            }}>
                <Text>Common Patterns</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
                navigation.navigate('Flashcards')
            }}>
                <Text>Flashcards</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
                navigation.navigate('Login')
            }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Menu;