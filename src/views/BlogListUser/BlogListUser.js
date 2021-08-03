import { Container, Row, Col, Link } from 'react-bootstrap';
import Header from '../../components/common/Header';

const BlogListUser = ({ title, description, users, category }) => {
	return (
		<Container fluid>
			<Row md={3}>
				<Header />
			</Row>
			<Row>
				<Col md={2}>
					<Link to="/register">Registrate</Link>
					<Link to="/login">Login</Link>
				</Col>
				<Col className="section">
					<h3>Registrate y comparte tu Post!</h3>
					{/* <Main posts={posts} loading={loading} /> */}
				</Col>
			</Row>
			<Row md={1}>{/* <Footer /> */}</Row>
		</Container>
	);
};

export default BlogListUser;

//esta ruta es futura, listaria todas los blogs del usuario y seria privada.(dashboard) tambien hay que desarrollar la ruta en backend /user/dashboard/:userId
//tambien permitiria borrar cada posteo mostrando un boton y editarlo
