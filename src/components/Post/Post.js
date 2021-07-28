import { Row, Alert } from 'react-bootstrap';

const Post = ({ title, description, users, category, _id }) => {
	//console.log(title);
	return (
		<Row md={12} sm={12} className="d-block">
			<Alert variant="success">
				<Alert.Heading>{title}</Alert.Heading>
				<p>{description}</p>
				<hr />
				<p className="mb-0">{(users, category)}</p>
				{/* <a>{_id}</a> */}
			</Alert>
		</Row>
	);
};

export default Post;
