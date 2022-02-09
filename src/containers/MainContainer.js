import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import Colors from '../styles/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MainContainer({props})
{

	const tabs = [
		{
			name: 'Discover',
			activeIcon: <MaterialCommunityIcons name="compass" color={Colors.primary} size={25} />,
			inactiveIcon: <MaterialCommunityIcons name="compass-outline" color={Colors.blackOpacity5} size={25} />
		},
		{
			name: 'Compare',
			activeIcon: <MaterialCommunityIcons name="calendar-text" color={Colors.primary} size={25} />,
			inactiveIcon: <MaterialCommunityIcons name="calendar-text-outline" color={Colors.blackOpacity5} size={25} />
		},
		{
			name: 'Profile',
			activeIcon: <MaterialCommunityIcons name="account-circle" color={Colors.primary} size={25} />,
			inactiveIcon: <MaterialCommunityIcons name="account-circle-outline" color={Colors.blackOpacity5} size={25} />
		},
	];

	return (
		<Tabbar
			tabs={tabs}
			tabBarContainerBackground='#6699ff'
			tabBarBackground='#fff'
			activeTabBackground='#6699ff'
			labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
			onTabChange={() => console.log('Tab changed')}
		/>
	);

}