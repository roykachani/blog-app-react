import { createContext, useState, useEffect } from 'react';

import {
	setAuthStorage,
	removeAuthStorage,
	getAuthStorage,
	setRespStorage,
	getRespStorage,
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
	const [dataResponse, setDataResponse] = useState(null); //guardo response

	useEffect(() => {
		const authenticatedData = getAuthStorage();
		const userData = getRespStorage();
		if (authenticatedData && userData) {
			setAuth(authenticatedData);
			setDataResponse(userData);
		}
	}, []);

	const authenticate = (response) => {
		setDataResponse(response);
		setRespStorage(response);
		const { token } = response;
		setAuth(token);
		setAuthStorage(token);
	};

	const exit = () => {
		setAuth(null);
		removeAuthStorage();
	};

	return (
		<Provider value={{ auth, dataResponse, authenticate, exit }}>
			{children}
		</Provider>
	);
};
