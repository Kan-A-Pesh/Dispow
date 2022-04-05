import React from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import CalendarView from "./CalendarView";
import Label from "../Common/Label";
import moment from 'moment';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_URI = 'https://source.unsplash.com/random?sig=';

export default function CompareView() {

	const [selectedDate, setSelectedDate] = React.useState(moment());

	return (
		<View style={styles.view}>
			<CalendarView
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				calendarItem={({item}) => (
					<View style={styles.item}>
          				<Image source={{uri: BASE_URI + item.format("DDMMYYYY")}} style={styles.item} />
						<Label style={styles.text}>{item.format("DD/MM/YYYY")}</Label>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
	},
	item: {
		width: WINDOW_WIDTH,
		flex: 1,
		backgroundColor: "#f0658c",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "white",
		borderColor: "black",
		backgroundColor: "#0008",
		borderWidth: 3,
		fontSize: 40,
		margin: 30,
		padding: 15,
		position: "absolute",
	}
});