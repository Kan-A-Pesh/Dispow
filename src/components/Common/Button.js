import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../styles/Colors";
import Label from "./Label";

export default function Button({size = 20, color = "primary", appearance = "filled", style = null, text = "Click me!", onPress})
{
	if (color === "primary") color = Colors.primary;
	if (color === "secondary") color = Colors.secondary;
	if (color === "tertiary") color = Colors.tertiary;

	let bgColor = color;
	let textColor = color;

	switch (appearance) {
		case "outlined":
			bgColor = "transparent";
			break;
		case "ghost":

			bgColor += "05"; // Add opacity to background color.
			break;
		default:
			textColor = Colors.white;
			break;
	}

	let _styles = StyleSheet.create({
		button: {
			backgroundColor: bgColor,
			borderColor: color,
			borderWidth: (appearance === "outlined")?2:0,
			paddingVertical: (appearance === "outlined")?10:12,
		},
		text: {
			fontSize: size
		}
	})

	return (
		<TouchableOpacity
			style={[
				styles.button,
				_styles.button,
				style
			]}
			onPress={onPress}
		>
			<Label
				color={textColor}
				style={_styles.text}
			>
				{text}
			</Label>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 20,
		paddingVertical: 12,
		paddingHorizontal: 25,
		justifyContent: 'center',
		alignItems: 'center',
	}
})