import client from "../common/client";
import storage from "../common/storage";

export default async function logout() {
	let result = await client.delete("/sessions/");

	if (!result.data) throw "Response error: No data provided";
	
	global.userId = undefined;
	await storage.deleteDataAsync("auth");
}