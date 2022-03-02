import { StatusBar } from 'expo-status-bar';
import { useRef, useState, useContext } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Animated, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import FlashcardFront from '../components/FlashcardFront';
import FlashcardBack from '../components/FlashcardBack';
import Selector from '../components/Selector';
import storePatterns from '../store';

//import Context API
import ContextProvider from '../context/patternContext';

export default function FlashCards() {
  const animate = useRef(new Animated.Value(0));
  const [cardFlipped, setCardFlipped] = useState(false);
  const [textVal, setTextVal] = useState('')

  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });


  const handleFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: cardFlipped ? 0 : 180,
      useNativeDriver: true
    }).start(() => {
      setCardFlipped(!cardFlipped);
    });
  };

  return (
    <ContextProvider>
    <View style={styles.container}>
      <Selector store={storePatterns}/>
      <View>
          <View>
          <Animated.View style={[{ transform: [{ rotateY: interpolateFront}]}, styles.hidden]}>
            <FlashcardFront />
          </Animated.View>
          <Animated.View style={[{transform: [{ rotateY: interpolateBack}]},styles.back, styles.hidden]}>
            <FlashcardBack />
          </Animated.View >
        </View>
        <View style={styles.textAreaBox}>
          <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type your own pseudocode"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={textVal}
          onChangeText={setTextVal}
          >
        </TextInput>
        <View style={styles.twoButtons}>
          <TouchableOpacity onPress={() => setTextVal('')}><MaterialCommunityIcons name="text-box-remove-outline" size={24} color="white" /></TouchableOpacity>
          <TouchableOpacity 
          style={styles.btn}
          onPress={handleFlip}><p>{cardFlipped ? 'PROBLEM' : 'SOLUTION'}</p></TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Great Work!")}><MaterialCommunityIcons name="clipboard-check-outline" size={24} color="white" /></TouchableOpacity>
        </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  hidden: {
    backfaceVisibility: 'hidden',
  },
  back: {
    position: 'absolute',
    top: 0,
  },
  textAreaBox: {
    backgroundColor: 'gainsboro',
    borderColor: 'gray',
    borderWidth: 1,
  },
  textArea: {
    height: 170,
    padding: 5,
    zIndex: 1
  },
  btn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  twoButtons: {
    backgroundColor: 'darkslateblue',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
