import React from "react";
import { Animated, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../../styles/Colors";
import Label from "./Label";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function InputField({
	type = "none",
	title = "Title:",
	icon = null,
	placeholder = "Enter text ...",
	value = "",
	onChangeValue = null,
	disabled = false,
	multiline = false,
	style})
{
	const [selected, setSelected] = React.useState(false);
	const [visible, setVisible] = React.useState(type != "password");

	let button = <></>;

	if (type === "password")
	{
		button =
		<TouchableOpacity
			onPress={() => setVisible(!visible)}
		>
			<MaterialCommunityIcons 
				name={visible ? "eye-off-outline" : "eye-outline"}
				color={Colors.black}
				size={30}
			/>
		</TouchableOpacity>
	}

	return (
		<View style={style}>
			<Label
				color={Colors.black}
				size={15}
			>
				{title}
			</Label>
			<View style={styles.field}>
				<MaterialCommunityIcons 
					name={icon}
					color={Colors.blackOpacity5}
					size={35}
				/>
				<TextInput
					value={value}
					onChangeText={onChangeValue}
					placeholder={placeholder}
					textContentType={type}
					editable={!disabled}
             		selectTextOnFocus={!disabled}
					secureTextEntry={!visible}
					multiline={multiline}
					numberOfLines={multiline ? 4 : 1}
					style={styles.input}
					onFocus={() => setSelected(true)}
					onBlur={() => setSelected(false)}
				/>
				{button}
				<View style={styles.line}/>
				<View style={
					[
						styles.line,
						{
							width: selected?'100%':'0%',
							backgroundColor: Colors.primary,
						},
					]
				}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 50,
		fontSize: 20,
		marginLeft: 5,
		flexGrow: 1,
	},
	field: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 5,
	},
	line: {
		position: 'absolute',
		bottom: 0,
		height: 1,
		width: "100%",
		backgroundColor: "#C4C4C4C4"
	}
});