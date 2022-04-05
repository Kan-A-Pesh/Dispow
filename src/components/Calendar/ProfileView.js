import React from "react";
import { StyleSheet, View, Dimensions, ActivityIndicator, Image } from "react-native";
import CalendarView from "./CalendarView";
import Label from "../Common/Label";
import moment from 'moment';
import fetchCalendar from "../../../api/calendars/fetchCalendar";
import Colors from "../../styles/Colors";

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_URI = 'https://source.unsplash.com/random?sig=';

export default function ProfileView({calendarId}) {

	const [selectedDate, setSelectedDate] = React.useState(moment());
	const [content, setContent] = React.useState(null);

	React.useEffect(() => {
		fetchCalendar(selectedDate)
			.then((usr) => {
				setUser(usr);
			})
			.catch(error => {
				setContent({error: error});
			})
	}, [selectedDate]);

	var calendarItem = ({item}) => (
		<View style={styles.item}>
			<ActivityIndicator
				size="large"
				color={Colors.black}
				style={{
					alignSelf: "center",
				}}
			/>
		</View>
	);

	if (content)
	{
		if (content.error)
		{
			calendarItem = ({item}) => (
				<View style={styles.item}>
					<Label
						color={Colors.black}
						style={{
							margin: 20,
							textAlign: "center",
						}}
					>
						{content.error}
					</Label>
				</View>
			);
		}
		else
		{
			calendarItem = ({item}) => (
				<View style={styles.item}>
					  <Image source={{uri: BASE_URI + item.format("x")}} style={styles.item} />
					<Label style={styles.text}>{item.format()}</Label>
				</View>
			)
		}
	}


	return (
		<View style={styles.view}>
			<CalendarView
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				calendarItem={calendarItem}
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