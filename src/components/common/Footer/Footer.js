import { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<Container className="text-center" style={{ height: '6vh' }}>
			<Row md={12} className="d-flex justify-content-around  pt-3">
				<Col md={3}>
					<a href="https://github.com/roykachani">Github</a>
				</Col>
				<Col md={3}>Hecho por Roy Kachani </Col>
				<Col md={3}>
					<a href="https://www.linkedin.com/in/roykachani">Linkedin</a>
				</Col>
			</Row>
		</Container>
	);
};

export default memo(Footer);
