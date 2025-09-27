import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from "./screens/HomeScreen";
import Countdown from "./screens/Countdown";
import TrafficLights from "./screens/TrafficLights";
import Timers from "./screens/Timer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen 
            name="Home" // main menu screen that app starts at
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Countdown" 
            component={Countdown}  // default is 10, tap on screen to reduce
          />
          <Stack.Screen 
            name="TrafficLights" // green - amber - red, tap to progress
            component={TrafficLights} 
          />
          <Stack.Screen 
            name="Timers" // default is 1, 5 & 10 mins
            component={Timers} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView> 
  );
}
