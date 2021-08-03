import { useCallback, useEffect, useState } from 'react';

import { API } from '../API';

export const useFetch = (endpoint = 'blog') => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [error, setError] = useState(false);

	const getDAta = useCallback(async () => {
		try {
			// const data =await axios.get("http://localhost:3001/api/") forma comun
			const { data } = await API.get(`${endpoint}`);
			setData(data);
			setLoading(false);
		} catch (e) {
			console.error(e); //kibana puede manejar el error
			setError(true);
		}
	}, [endpoint]);

	useEffect(() => {
		getDAta();
	}, [endpoint, getDAta]);

	return [data, loading, error];
};

export const usePost = () => {
	const [response, setResponse] = useState();
	const [fetching, setfetching] = useState(false);

	const postData = async (endpoint, object, config) => {
		try {
			setfetching(true);

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
