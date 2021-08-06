import Register from '../../components/Register';
import { Col, Container, Row } from 'react-bootstrap';

const Regist = () => {
	return (
		<Container className="mt-5" style={{ height: '80vh' }}>
			<Row className="justify-content-center">
				<Col md={4}>
					<Register />
				</Col>
			</Row>
		</Container>
	);
};

export default Regist;
