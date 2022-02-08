import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import Icon from '@mdi/react';
import Colors from '../styles/Colors'

import { mdiCompass, mdiAccountCircleOutline, mdiCalendarText } from '@mdi/js'; 

export default function MainContainer({props})
{

	const tabs = [
		{
			name: 'Discover',
			activeIcon: <Icon path={ mdiCompass } color={Colors.primary} size={25} />,
			inactiveIcon: <Icon path={ mdiCompass } color={Colors.blackOpacity5} size={25} />
		},
		{
			name: 'Compare',
			activeIcon: <Icon path={ mdiCalendarText } color={Colors.primary} size={25} />,
			inactiveIcon: <Icon path={ mdiCalendarText } color={Colors.blackOpacity5} size={25} />
		},
		{
			name: 'Profile',
			activeIcon: <Icon path={ mdiAccountCircleOutline } color={Colors.primary} size={25} />,
			inactiveIcon: <Icon path={ mdiAccountCircleOutline } color={Colors.blackOpacity5} size={25} />
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