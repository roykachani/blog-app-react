import UserData from '../../components/UserData/UserData';

const User = ({ match }) => {
	const userId = match.params.id;
	return (
		<>
			<UserData userId={userId} />
		</>
	);
};

export default User;
