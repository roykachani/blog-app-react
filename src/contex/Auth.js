import { createContext, useState, useEffect } from 'react';
import {
	setAuthStorage,
	removeAuthStorage,
	getAuthStorage,
} from '../utils/auth';

//contexto
export const AuthContext = createContext({
	auth: null,
	authenticate: () => {},
	logout: () => {},
});

//provider

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(null); //guardo el token

	useEffect(() => {
		const authenticatedData = getAuthStorage();
		if (authenticatedData) setAuth(authenticatedData);
	}, []);

	const authenticate = (response) => {
		setAuth(response);
		const { token } = response;
		setAuthStorage(token);
	};
	console.log(auth);

	const logout = () => {
		setAuth(null);
		removeAuthStorage();
	};

	return <Provider value={{ auth, authenticate, logout }}>{children}</Provider>;
};
