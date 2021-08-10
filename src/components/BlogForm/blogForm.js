import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { usePost } from '../../hooks/useFetch';
import { schema } from './schema';
import { getAuthStorage } from '../../utils/auth';

const BlogForm = () => {
	console.log('blogform');
	const [token, setToken] = useState('');

	const [post, response, fetching] = usePost();

	const history = useHistory();

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		const loggedUserJson = getAuthStorage();
		if (loggedUserJson) {
			setToken(loggedUserJson);
		}
	}, []);

	const submitPost = (data) => {
		const config = {
			headers: {
				Authorization: `bearer ${token}`,
			},
		};
		post('/blog', data, config);
	};

	if (response) {
		history.push('/');
	}

	return (
		<Card>
			<Card.Header>Crea tu post</Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit(submitPost)}>
					<Form.Group>
						<Form.Label>Titulo</Form.Label>
						<Form.Control {...register('title')} type="text" name="title" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Escribe tu Post</Form.Label>
						<Form.Control
							{...register('description')}
							as="textarea"
							style={{ height: '300px' }}
							name="description"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Selecciona una imagen</Form.Label>
						<Form.Control type="file" {...register('photo')} name="photo" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Escribi la categoria</Form.Label>
						<Form.Control name="category" {...register('category')} />
					</Form.Group>
					<Button type="submit">Crear Post!</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default BlogForm;
