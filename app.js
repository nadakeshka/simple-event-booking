import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from './screens/Authantiction';
import Dashboard from './screens/Dashboard';
import EventDetails from './screens/Eventdetails';
import UserDashboard from './screens/UserDachboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen 
          name="Auth" 
          component={AuthScreen} 
          options={{ headerShown:false }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
           options={{ headerShown:false }}
        />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="EventDetails" component={EventDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
