import { Alert, Row, Col } from 'react-bootstrap';

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
			<Alert.Heading>
				{title.length >= 50 ? `${title.substr(0, 49)}...` : title}
			</Alert.Heading>
			<p>
				{description.length >= 50
					? `${description.substr(0, 49)}`
					: description}
			</p>
			<hr />
			<Row className="d-flex justify-content-between">
				<Col className="d-flex justify-content-start">
					<span className="pr-2">{category}</span>
					<ButtonLink id={id} user={user} />
				</Col>
				<Col className="d-flex justify-content-end">
					<ButtonLink _id={_id} />
				</Col>
			</Row>
		</Alert>
	);
};

export default Post;
