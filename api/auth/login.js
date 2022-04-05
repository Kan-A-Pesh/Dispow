import client from "../common/client";
import storage from "../common/storage";

export default async function login(username, password) {
	let result = await client.post(
		"/sessions/",
        {
            "name": username,
            "password": password
        }
	);

	if (!result.data) throw "Response error: No data provided";
	
	if (result.status == 401)
	{
		throw result.data.message;
	}

	if (result.status == 201)
	{
		let authToken = result.data.authToken;
		let userId = result.data.userId;
		global.userId = userId;
		
		await storage.setDataAsync("auth",{
			token: authToken,
			id: userId
		});

		return;
	}

	throw "Unknown error, please retry later ... (status: " + result.status + ")";
}