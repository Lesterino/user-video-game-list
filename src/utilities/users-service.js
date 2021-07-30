import * as usersAPI from './users-api';

export const signUp = async(userData) => {
	try {
		// Delegate the network request code to the users-api.js API module
		// which will ultimately return a JSON Web Token (JWT)
        console.log('hit signup')
		const token = await usersAPI.signUp(userData);
		// Persist the "token"
		localStorage.setItem('token', token);
		return getUser();
	} catch {
		throw new Error('Invalid Sign Up');
	}
}

export const getToken = () => {
	// getItem returns null if there's no string
	const token = localStorage.getItem('token');
	if (!token) return null;
	// Check if expired, remove if it is
	const payload = JSON.parse(atob(token.split('.')[1]));
	// A JWT's exp is expressed in seconds, not milliseconds, so convert it
	if (payload.exp < Date.now() / 1000) {
		localStorage.removeItem('token');
		return null;
	}
	return token;
}

export const getUser = () => {
	const token = getToken();
	// If there's a token, return the user in the payload, otherwise return null
	return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export const logOut = () => {
	localStorage.removeItem('token');
}

export const login = async(credentials) => {
	try {
		// Delegate the network request code to the users-api.js API module
		// which will ultimately return a JSON Web Token (JWT)
		const token = await usersAPI.login(credentials);
		// Persist the "token"
		localStorage.setItem('token', token);
		return getUser();
	} catch {
		throw new Error('Invalid Login');
	}
}

export function checkToken() {
	return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
}