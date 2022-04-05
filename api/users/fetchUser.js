import client from "../common/client";

export default async function fetchUser(id = null) {
	let result = await client.get(
		"/users/",
		(id) ? { id: id } : {}
	);

	if (!result.data) throw "Response error: No data provided";
	
	if (result.status == 404 ||
		result.status == 500 )
	{
		throw result.data.message;
	}

	if (result.status == 200)
	{
		let users = result.data.result;
		return users;
	}

	throw "Unknown error, please retry later ... (status: " + result.status + ")";
}