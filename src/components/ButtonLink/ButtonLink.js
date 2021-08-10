import { memo } from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ id, user }) => {
	return (
		<>
			<Link to={`/users/Profile/${id}`}>{user}</Link>
		</>
	);
};

export default memo(ButtonLink);
