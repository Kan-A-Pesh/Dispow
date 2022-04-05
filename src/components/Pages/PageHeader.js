import React from 'react';
import { View, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Label from '../Common/Label';

export default function PageHeader({ colors, children = null, border = true, title = "Default", onBack = null, onFriends = null, onMessages = null }) {

	onFriends = () => { }
	onMessages = () => { }

	return (
		<LinearGradient colors={colors} style={[styles.container, border ? styles.containerRadius : null]}>
			<View style={styles.header}>
				{onBack ?
					<TouchableOpacity style={styles.headerButton} onPress={onBack}>
						<MaterialCommunityIcons name="arrow-left" {...iconProps} />
					</TouchableOpacity> : null
				}
				<Label
					type="semiBold"
					size={25}
					color="rgba(0, 0, 0, 0.5)"
				>
					{" " + title}
				</Label>
				{onFriends ?
					<TouchableOpacity style={[styles.leftButton, styles.headerButton]} onPress={onFriends}>
						<MaterialCommunityIcons name="account-multiple" {...iconProps} />
					</TouchableOpacity> : null
				}
				{onMessages ?
					<TouchableOpacity style={styles.headerButton} onPress={onMessages}>
						<MaterialCommunityIcons name="send" {...iconProps} />
					</TouchableOpacity> : null
				}
			</View>
			{children}
		</LinearGradient>
	)
}

const iconProps = {
	size: 35,
	color: "rgba(0, 0, 0, 0.5)"
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
	container: {
		paddingTop: STATUSBAR_HEIGHT,
	},
	containerRadius: {
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 5,
	},
	leftButton: {
		marginLeft: 'auto'
	},
	headerButton: {
		borderRadius: 5,
		marginHorizontal: 5,
	},
});