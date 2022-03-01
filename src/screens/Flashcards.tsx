import { StatusBar } from 'expo-status-bar';
import { useRef, useState, useContext } from 'react';
import { StyleSheet, View, Button, Animated} from 'react-native';
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
            <View style={styles.button}>
              <Button 
                title={cardFlipped ? 'PROBLEM' : 'SOLUTION'}
                onPress={handleFlip}/>
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
    backgroundColor: 'purple',
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
  button: {
    padding: 5
  }
});
