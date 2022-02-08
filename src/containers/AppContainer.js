import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../screen/Welcome/LoginScreen';

import RegisterScreen from '../screen/Welcome/RegisterScreen';
import WelcomeScreen from '../screen/Welcome/WelcomeScreen';
import MainContainer from './MainContainer';

const Stack = createStackNavigator();

const config = {
	animation: 'spring',
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
};

const options = {
	gestureDirection: "vertical",
	gestureEnabled: true,
	animationEnabled: true,
	headerMode: "float",
	headerShown: true,
	headerStyle: {
		backgroundColor: 'transparent',
		elevation: 0, // remove shadow on Android
		shadowOpacity: 0, // remove shadow on iOS
	},
	headerTitle: "Go back",
	headerTintColor: "#fff",
	cardOverlayEnabled: true,
	cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
	cardStyle: {
		backgroundColor: "transparent",
	},
    transitionSpec: {
		open: config,
		close: config,
    },
	presentation: 'transparentModal',
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
}

export default function AppContainer()
{
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Welcome'
			>
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={options}
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
					options={options}
				/>
				<Stack.Screen
					name="Main"
					component={MainContainer}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}