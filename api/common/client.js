import { create } from "apisauce";
import config from "./config";
import storage from "./storage";
import logout from "../auth/logout";

const client = create({
	baseURL: config.endPoint,
    timeout: 10000
});

client.setHeader("api-key", "HVUmJ30txxctqBX9oAPFkeQXLH46TU620N7fwt7UK8ZJQnHeL2CpO6ZevjsLhJo7");

client.addAsyncRequestTransform(async request => {
	const authData = await storage.getDataAsync("auth");
	if (authData)
	{
		request.headers["sessionid"] = authData.token;
	}
});

export default client;