import React from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import { Animated } from "react-native";

import Colors from '../styles/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CompareScreen from '../screen/Main/CompareScreen';
import DiscoverScreen from '../screen/Main/DiscoverScreen';
import ProfileScreen from '../screen/Main/ProfileScreen';
import EditProfileModal from '../screen/Main/EditProfileModal';

const FadeInView = (props) => {
	const fadeAnim = React.useRef(new Animated.Value(0)).current;

	useFocusEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();
		return () => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 250,
				useNativeDriver: true,
			}).start();
		};
	});

	return (
		<Animated.View
			style={{
				flex: 1,
				opacity: fadeAnim,
			}}>
			{props.children}
		</Animated.View>
	);
};

const tabs = {
	Discover: {
		labelStyle: {
			color: '#00B4D8',
		},
		icon: {
			component: () => <MaterialCommunityIcons name="calendar-text-outline" color="#F1C62C" size={20} />,
		},
		ripple: {
			color: '#00B4D8',
		},
	},
	Compare: {
		labelStyle: {
			color: '#F1C62C',
		},
		icon: {
			component: () => <MaterialCommunityIcons name="calendar-text-outline" color="#F1C62C" size={20} />,
		},
		ripple: {
			color: '#F1C62C',
		},
	},
	Profile: {
		labelStyle: {
			color: '#00B4D8',
		},
		icon: {
			component: () => <MaterialCommunityIcons name="account-circle" color="#00B4D8" size={20} />,
		},
		ripple: {
			color: '#00B4D8',
		},
	},
};

const Tab = createBottomTabNavigator();


const FadeCompareScreen = (props) => (
	<FadeInView>
		<CompareScreen {...props} />
	</FadeInView>
);
const FadeDiscoverScreen = (props) => (
	<FadeInView>
		<DiscoverScreen {...props} />
	</FadeInView>
);
const FadeProfileScreen = (props, nav) => (
	<FadeInView>
		<ProfileScreen {...props} mainNavigation={nav} />
	</FadeInView>
);

export default function MainContainer({ navigation, props }) {

	const FadeProfileScreenNav = (props) => FadeProfileScreen(props, navigation);

	return (
		<Tab.Navigator
			tabBar={props => (
				<AnimatedTabBar
					preset="flashy"
					tabs={tabs}
					{...props}
				/>
			)}
			screenOptions={{
				header: () => null,
				unmountOnBlur: true,
				headerShown: false,
			}}
		>
			<Tab.Screen
				name="Discover"
				component={FadeDiscoverScreen}
			/>
			<Tab.Screen
				name="Compare"
				component={FadeCompareScreen}
			/>
			<Tab.Screen
				name="Profile"
				component={FadeProfileScreenNav}
			/>
		</Tab.Navigator>
	)
}