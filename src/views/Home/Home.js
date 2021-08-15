import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../contex/Auth';
import Main from '../../components/common/Main';
import Spinner from '../../components/Spinner';
import './style.css';

const Home = () => {
	const { auth } = useContext(AuthContext);

	const [data, loading] = useFetch('blog');
	const { result: posts } = data;

	if (loading)
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
		<Container fluid className="mt-2 mb-2" style={{ minHeight: '80vh' }}>
			<Row>
				<Col>
					{!auth && (
						<h3 className="text-center mt-2 mb-2">
							Registrate y comparte tu Post!
						</h3>
					)}
					<Main posts={posts} />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
