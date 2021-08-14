import { useContext } from 'react';
import { AuthContext } from '../../contex/Auth';
import UserProfile from '../UserProfile/UserProfile';
import { useFetch } from '../../hooks/useFetch';

const UserData = ({ userId }) => {
	const { auth } = useContext(AuthContext);

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

export default UserData;
