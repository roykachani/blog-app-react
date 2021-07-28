import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { Card, Button, Form } from 'react-bootstrap';
import { usePost } from '../../hooks/useFetch';

const Login = () => {
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const [post, response, fetching] = usePost();

	const submitLogin = (data) => {
		console.log(data);
		post('auth/login', data);
		const { headers } = response;
		console.log(headers);
	};

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
