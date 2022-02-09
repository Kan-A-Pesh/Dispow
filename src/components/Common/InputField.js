import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../../styles/Colors";
import Label from "./Label";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function InputField({type = "text", title = "Title:", icon = null, placeholder = "Enter text ...", value = "", onChangeValue = null })
{
	return (
		<View>
			<Label
				color={Colors.black}
				size={15}
			>
				{title}
			</Label>
			<View>
				<TextInput
					value={value}
					onChangeText={onChangeValue}
					placeholder={placeholder}
					style={styles.input}
				/>
				<MaterialCommunityIcons 
					name={icon}
					color={Colors.blackOpacity5}
					size={35}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		
	}
});