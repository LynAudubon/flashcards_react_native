import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Patterns from "./src/screens/Patterns";
import Flashcards from './src/screens/Flashcards';
import storePatterns from './src/store';
import Login from './src/screens/Login';

export type StackParamList = {
    "Common Patterns": Array<{title: string, desc: string}>,
    "Flashcards": any,
    "Login": any,
};

const Stack = createNativeStackNavigator<StackParamList>();
let json = [];

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const fetchPatterns = async() => {
    try{
      const res = await fetch('/');
      json = await res.json();

      if(Array.isArray(json) && json.length > 0) {
        setData(json)
      }else{
        setData(storePatterns)
      }  

    }catch(err){
        console.error(err);
    }finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      fetchPatterns();
    }, []);


  return (
    <NavigationContainer > 
      {isLoading ? <ActivityIndicator />: (        
        <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} initialRouteName="Common Patterns">
          <Stack.Screen name="Common Patterns">
                {(props) => <Patterns {...props} store={data} />}
          </Stack.Screen>
          <Stack.Screen name="Flashcards" component={Flashcards} />
           <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;