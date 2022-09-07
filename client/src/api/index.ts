import got from 'got';

export const baseURL = 'http://localhost:8000';

const options = {
	prefixUrl: `${baseURL}/api`,
	// headers: {
	// 	Authorization: getTokenFromVault(),
	// },
};

const API = got.extend(options);

export default API;
