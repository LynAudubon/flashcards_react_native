import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Patterns from "./src/components/Patterns";
import Flashcards from './src/screens/Flashcards';
import storePatterns from './src/store';
import Login from './src/screens/Login';

export type StackParamList = {
    "Common Patterns": Array<{title: string, desc: string}>,
    "Flashcards": any,
    "Login": any,
};

const Stack = createNativeStackNavigator<StackParamList>();

// const Stack = createNativeStackNavigator({
//     "Common Patterns": { screen: Patterns},
//     "Flashcards": { screen: Flashcards},
//     "Login": { screen: Login }
//  }, 
//  {
//   defaultNavigationOptions: {
//       title: 'Aligned Center',
//       headerTitleAlign: 'center'
//   }
// });

 const App = () => {
  return (
      <NavigationContainer >         
        <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} initialRouteName="Common Patterns">
          <Stack.Screen name="Common Patterns">
                {(props) => <Patterns {...props} store={storePatterns} />}
          </Stack.Screen>
          <Stack.Screen name="Flashcards" component={Flashcards} />
           <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles=StyleSheet.create({
  container: {
    margin: 'auto'
  }
})
export default App;