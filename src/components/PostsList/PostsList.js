import { Row, Col } from 'react-bootstrap';
import Post from '../Post';

const PostsList = ({ posts }) => {
	// console.log(posts);

	return (
		<Row className="justify-content-center">
			<Col md={6} sm={12}>
				{posts?.length > 0 &&
					posts.map((post) => <Post {...post} key={post._id} />).reverse()}
			</Col>
		</Row>
	);
};

export default PostsList;
