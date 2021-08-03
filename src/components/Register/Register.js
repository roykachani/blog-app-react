import { memo } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { schema } from './schema';
import { usePost } from '../../hooks/useFetch';
import { Card, Button, Form } from 'react-bootstrap';

const Register = () => {
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const history = useHistory();
	const [post, response, fetching] = usePost();

	const submitForm = (data) => {
		console.log(data);
		post('auth', data);
	};
	if (response) history.push('/login');

	return (
		<Card>
			<Card.Header>Registro</Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit(submitForm)}>
					<Form.Group>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							{...register('email')}
							type="email"
							name="email"
							placeholder="Enter email"
						/>
						<Form.Label>Password</Form.Label>
						<Form.Control
							{...register('password')}
							type="password"
							name="password"
							placeholder="Password"
						/>
						<Form.Label>@usuario</Form.Label>
						<Form.Control
							{...register('displayname')}
							type="text"
							name="displayname"
							placeholder="usuario"
						/>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							{...register('name')}
							type="text"
							name="name"
							placeholder="Nombre"
						/>
						<Form.Label>Apellido</Form.Label>
						<Form.Control
							{...register('lastname')}
							type="text"
							name="lastname"
							placeholder="Apellido"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Registrarse
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default memo(Register);
