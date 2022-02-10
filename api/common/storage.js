import * as SecureStore from 'expo-secure-store';

const getDataAsync = async (key) => {
	return JSON.parse(await SecureStore.getItemAsync(key));
}

const setDataAsync = async (key, value = null) => {
	await SecureStore.setItemAsync(key, JSON.stringify(value));
}

export default {
	getDataAsync: getDataAsync,
	setDataAsync: setDataAsync
}