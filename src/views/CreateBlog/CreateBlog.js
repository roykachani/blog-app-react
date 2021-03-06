import BlogForm from '../../components/BlogForm/blogForm';
import { Col, Container, Row } from 'react-bootstrap';

const CreateBlog = () => {
	return (
		<Container className="mt-5" style={{ height: '80vh' }}>
			<Row className="justify-content-center">
				<Col md={8}>
					<BlogForm />
				</Col>
			</Row>
		</Container>
	);
};

export default CreateBlog;
