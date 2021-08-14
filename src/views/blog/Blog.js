import { Container, Row, Col, Link } from 'react-bootstrap';

const BlogListUser = ({ title, description, users, category }) => {
	return (
		<Container fluid>
			<Row md={3}></Row>
			<Row>
				<Col md={2}></Col>
				<Col className="section"></Col>
			</Row>
		</Container>
	);
};

export default BlogListUser;
