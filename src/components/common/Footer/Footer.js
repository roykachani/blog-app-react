import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<Container className="text-center">
			<Row>
				<Col>
					<a href="https://github.com/roykachani">Github</a>
				</Col>
				<Col>Hecho por Roy Kachani </Col>
				<Col>
					<a href="https://www.linkedin.com/in/roykachani">Linkedin</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
