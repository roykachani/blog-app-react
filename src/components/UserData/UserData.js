import { useContext } from 'react';
import { AuthContext } from '../../contex/Auth';
import UserProfile from '../UserProfile/UserProfile';
import { useFetch } from '../../hooks/useFetch';

const UserData = ({ userId }) => {
	const { auth } = useContext(AuthContext);
	//traer data response para comparar si es su perfil u de otro user para poder editar
	//intentar usar state para compara por token idea

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
