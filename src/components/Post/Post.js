import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import ButtonLink from '../ButtonLink';

const Post = ({
	author: user,
	title,
	description,
	users: id,
	category,
	_id,
}) => {
	return (
		<Alert variant="warning">
			<Alert.Heading>{title}</Alert.Heading>
			<p>{description}</p>
			<hr />
			<span className="mb-0">{category}</span>
			<ButtonLink id={id} user={user} />
			<Link to={`/blog/${_id}`}>ver Blog</Link>
		</Alert>
	);
};

export default Post;
