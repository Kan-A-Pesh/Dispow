import { StyleSheet, Text } from "react-native";
import { useFonts } from 'expo-font';

export default function Label({style = null, color = "#FFF", size = 20, type = "regular", children})
{
	const [loaded] = useFonts({
		regular: require('./../../../assets/fonts/BalooBhai2-Regular.ttf'),
		medium: require('./../../../assets/fonts/BalooBhai2-Medium.ttf'),
		semiBold: require('./../../../assets/fonts/BalooBhai2-SemiBold.ttf'),
		bold: require('./../../../assets/fonts/BalooBhai2-Bold.ttf'),
		extraBold: require('./../../../assets/fonts/BalooBhai2-ExtraBold.ttf'),
	});
  
	if (!loaded) {
	  return null;
	}

	let textSize = StyleSheet.create({
		style: {
			fontSize: size,
			fontFamily: type,
			color: color
		}
	});

	return (
		<Text style={[textSize.style, style]}>
			{children}
		</Text>
	)
}