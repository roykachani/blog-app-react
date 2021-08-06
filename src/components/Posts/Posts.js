import { Row, Col } from 'react-bootstrap';
import Post from '../Post/Post';

const Posts = ({ posts }) => {
	// console.log(posts);

	return (
		<Row className="justify-content-center">
			<Col md={10} sm={12}>
				{posts?.length > 0 &&
					posts.map((post) => <Post {...post} key={post._id} />).reverse()}
			</Col>
		</Row>
	);
};

export default Posts;
