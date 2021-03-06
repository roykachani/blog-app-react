import { useContext, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { schema } from './schema';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { usePost } from '../../hooks/useFetch';
import { AuthContext } from '../../contex/Auth';
import { getAuthStorage } from '../../utils/auth';
import Spinner from '../Spinner';

const Login = () => {
	const { authenticate } = useContext(AuthContext);

	const history = useHistory();

	useEffect(() => {
		if (!!getAuthStorage()) history.push('/create');
	}, [history]);

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	//post
	const [post, response, fetching] = usePost();

	const submitLogin = (data) => {
		post('auth/login', data);
	};

	//comparto en el context
	if (response) {
		console.log(response);

		authenticate(response);
		history.push('/create');
	}

	if (fetching)
		return (
			<Container
				fluid
				className="mt-2 mb-2 d-flex justify-content-center"
				style={{ minHeight: '80vh' }}
			>
				<Row>
					<Col className="d-flex align-items-center">
						<Spinner />
					</Col>
				</Row>
			</Container>
		);

	return (
		<Card>
			<Card.Header>Ingresa</Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit(submitLogin)}>
					<Form.Group>
						<Form.Control
							{...register('email')}
							type="email"
							name="email"
							placeholder="Enter email"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							{...register('password')}
							type="password"
							name="password"
							placeholder="Password"
						/>
					</Form.Group>
					<Button type="submit">Ingresa</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default Login;
