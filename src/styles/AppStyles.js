import Colors from "./Colors";

const { StyleSheet } = require("react-native");

export default StyleSheet.create({

	welcomeScreen: {
		padding: 25,
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	authScreen: {
		flexGrow: 1,
		backgroundColor: Colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: 25,
	}

});