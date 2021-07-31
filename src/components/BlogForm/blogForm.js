import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { Card, Button, Form } from 'react-bootstrap';
import { usePost } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';

const BlogForm = () => {
	const [token, setToken] = useState('');

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const [post, response, fetching] = usePost();

	const submitPost = (data) => {
		const config = {
			headers: {
				Authorization: `bearer ${token}`,
			},
		};
		post('/blog', data, config);
	};

	if (response) {
		console.log(response);
	}
	useEffect(() => {
		const loggedUserJson = window.localStorage.getItem('loggedBlogApp');
		if (loggedUserJson) {
			const newToken = JSON.parse(loggedUserJson);
			setToken(newToken);
		}
	}, []);
	console.log(token);

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
