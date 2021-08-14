import { memo } from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ id, user, _id }) => {
	if (!!id && !!user)
		return (
			<>
				<Link to={`/users/Profile/${id}`}>{user}</Link>
			</>
		);
	if (!!_id)
		return (
			<>
				<Link to={`/blog/${_id}`}>Ver mas</Link>
			</>
		);
	return <></>;
	//este ultimo return es provisorio ya que hay post sin la prop user
};

export default memo(ButtonLink);
