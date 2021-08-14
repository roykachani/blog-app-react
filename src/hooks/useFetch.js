import { useCallback, useEffect, useState } from 'react';

import { API } from '../API';

export const useFetch = (endpoint, config) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [error, setError] = useState(false);

	const getData = async () => {
		try {
			console.log('GETDATA');
			console.log(endpoint, config);
			// const data =await axios.get("http://localhost:3001/api/") forma comun
			const { data } = await API.get(`${endpoint}`, config);
			setData(data);
			setLoading(false);
		} catch (e) {
			console.error(e); //kibana puede manejar el error
			setError(true);
		}
	};
	console.log(data);

	useEffect(() => {
		console.log('efect');
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return [data, loading, error];
};

export const usePost = () => {
	const [response, setResponse] = useState();
	const [fetching, setfetching] = useState(false);

	const postData = async (endpoint, object, config) => {
		try {
			setfetching(true);
			console.log(endpoint, config);
			//data
			const { data } = await API.post(`${endpoint}`, object, config);
			setResponse(data);
			setfetching(false);
		} catch (error) {
			console.log(error, 'ocurrio un error en la autentificacion');
		}
	};
	return [postData, response, fetching];
};
