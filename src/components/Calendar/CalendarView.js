import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CalendarHeader from "./CalendarHeader";

export default function CalendarView({calendarItem, selectedDate, setSelectedDate}) {

	const next = () => { setSelectedDate(selectedDate.clone().add(1, 'day')); };
	const prev = () => { setSelectedDate(selectedDate.clone().subtract(1, 'day')); };

	return (
		<View style={styles.view}>
			<CalendarHeader
				date={selectedDate}
				onNext={next}
				onPrev={prev}
			/>
			<FlatList
				data={[selectedDate]}
				style={styles.list}
				horizontal={true}
				extraData={[selectedDate]}
				
				onScrollEndDrag={(e) => {
					let vel = e.nativeEvent.velocity.x;
					
					if (vel > 3) {
						prev();
					}
					else if (vel < -3) {
						next();
					}
				}}
				keyExtractor={e => e}
				renderItem={calendarItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
	},
	list: {
		flex: 1,
	}
});