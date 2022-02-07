import Tabbar from "@mindinventory/react-native-tab-bar-interaction";

export default function MainContainer({props})
{

	const tabs = [
	{
		name: 'Profile',
		activeIcon: <Icon name="user" color="#fff" size={25} />,
		inactiveIcon: <Icon name="user" color="#4d4d4d" size={25} />
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