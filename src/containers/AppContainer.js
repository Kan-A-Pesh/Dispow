import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppContainer()
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainContainer} />
    </Stack.Navigator>
  );
}