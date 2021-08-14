import { Container, Row, Col } from 'react-bootstrap';
import ButtonLink from '../ButtonLink';

const Blog = (data) => {
	const { author: user, users: id } = data;
	return (
		<Container style={{ minHeight: '80vh' }}>
			<Row md={12} className="d-flex justify-content-center mt-3 mb-3">
				<Col md={12}>
					<Row>
						<Col>
							<h1>{data.title}</h1>
						</Col>
					</Row>
					<Row className="d-flex justify-content-center">
						<Col md={12} className="d-flex justify-content-between">
							<span>Categoria: {data.category}</span>
							<span>Creado: {data.createdAt}</span>
						</Col>
					</Row>
					<Row md={11} className="d-flex justify-content-center pt-2 pb-2">
						<Col>
							<span>Autor: </span>
							<ButtonLink id={id} user={user} />
						</Col>
					</Row>
					<Row md={12}>
						<Col>
							<p>{data.description}</p>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Blog;

//no me llega la data del  controller blog find al fetch
