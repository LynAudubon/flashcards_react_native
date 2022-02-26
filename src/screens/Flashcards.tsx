import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Animated} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Flashcard from '../components/Flashcard';
import Patterns from '../components/Patterns';
import Menu from '../components/Menu';
import commonPatterns from '../store'

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
    console.log(<Patterns store={commonPatterns}/>);
    Animated.timing(animate.current, {
      duration: 300,
      toValue: cardFlipped ? 0 : 180,
      useNativeDriver: true
    }).start(() => {
      setCardFlipped(!cardFlipped);
    });
  };

  return (
      <View>
          <Menu />
    <View >
        <View style={styles.container}>
        <Animated.View style={[{ transform: [{ rotateY: interpolateFront}]}, styles.hidden]}>
          <Flashcard title="Front" />
        </Animated.View>
        <Animated.View style={[{transform: [{ rotateY: interpolateBack}]},styles.back, styles.hidden]}>
          <Flashcard title="Back" />
        </Animated.View >
          <View style={styles.button}>
            <Button 
              title="Answer"
              onPress={handleFlip}/>
          </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
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
