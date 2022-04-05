import client from "../common/client";

export default async function fetchCalendar(date, target) {
	let result = await client.get(
		"/calendars/",
		(target) ?
			{
				date: date.toISOString(),
				target: target
			} :
			{
				date: date.toISOString()
			}
	);

	if (!result.data) throw "Response error: No data provided";

	if (result.status == 401 ||
		result.status == 404 || 
		result.status == 500 ||
		result.status == 501)
	{
		throw result.data.message;
	}

	if (result.status == 200)
	{
		let calendar = result.data.calendar;
		return calendar;
	}

	throw "Unknown error, please retry later ... (status: " + result.status + ")";
}