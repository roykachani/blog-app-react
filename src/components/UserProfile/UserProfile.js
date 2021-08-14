import { Button, Col, Container, Row, Card, ListGroup } from 'react-bootstrap';

const UserProfile = (data) => {
	const { blogsData, result } = data;
	console.log(blogsData, result);

	return (
		<Container className="pt-3">
			<h3>Perfil del usuario</h3>
			<Row md={4}>
				<Col>
					<h5>Datos Personales</h5>
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>{result.displayname}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								<span>Nombre: </span> <span>{result.name}</span>
							</Card.Subtitle>
							<Card.Text>
								<span>Cantidad de publicaciones: </span>
								<span>{result.blogs.length}</span>
								<br></br>
								<span>Ultima coneccion: {result.singUpDate} </span>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<h5>Ultimas Publicaciones</h5>
					<Card style={{ width: '32rem' }}>
						<Card.Body>
							<ListGroup variant="flush" className="">
								{blogsData.map((blog) => (
									<ListGroup.Item key={blog._id}>
										{blog.title}
										<Button
											style={{ width: '20px', height: '20px' }}
											type="button"
											variant="danger"
										>
											x
										</Button>
									</ListGroup.Item>
								))}
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default UserProfile;
