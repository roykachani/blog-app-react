import { useContext } from 'react';

import UserProfile from '../../components/UserProfile/UserProfile';
import { AuthContext } from '../../contex/Auth';
import { useFetch } from '../../hooks/useFetch';

const User = ({ match }) => {
	const { auth } = useContext(AuthContext);
	const userId = match.params.id;

	const config = {
		headers: {
			Authorization: `bearer ${auth}`,
		},
	};
	const [data, loading] = useFetch(`users/userProfile/${userId}`, config);
	if (loading) return <h3>Cargando</h3>;

	if (!loading)
		return (
			<>
				<UserProfile userId={userId} {...data} />
			</>
		);
};

export default User;
