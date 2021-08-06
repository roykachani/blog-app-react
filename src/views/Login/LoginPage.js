import Login from '../../components/Login';
import { Col, Container, Row } from 'react-bootstrap';
const LoginPage = () => {
	return (
		<Container className="mt-5" style={{ height: '80vh' }}>
			<Row className="justify-content-center">
				<Col md={4} className="section">
					<Login />
				</Col>
			</Row>
		</Container>
	);
};

export default LoginPage;
