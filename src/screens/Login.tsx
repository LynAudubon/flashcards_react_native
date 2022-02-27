import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Menu from '../components/Menu';
import storePatterns from '../store';
import Selector from '../components/Selector';

const Login = () => {
  return (
    <View>
       <Selector store={storePatterns}/>
    </View>
  );
};

export default Login;

