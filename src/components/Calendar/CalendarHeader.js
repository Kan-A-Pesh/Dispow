import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import Label from "../Common/Label";
import Colors from "../../styles/Colors";

import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function CalendarHeader({ date, onNext, onPrev }) {

	return (
		<View style={styles.header}>
			<TouchableOpacity
				style={styles.button}
				onPress={onPrev}
			>
				<MaterialCommunityIcons name="chevron-left" size={35} color="black" />
			</TouchableOpacity>
			<Label
				color={Colors.black}
			>
				{date.format("dddd D MMM")}
			</Label>
			<TouchableOpacity
				style={styles.button}
				onPress={onNext}
			>
				<MaterialCommunityIcons name="chevron-right" size={35} color="black" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	button: {
		padding: 7,
	}
});