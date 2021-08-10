import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Main from '../../components/common/Main';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../contex/Auth';
import './style.css';

const Home = () => {
	const { auth } = useContext(AuthContext);

	const [data, loading] = useFetch('blog');
	const { result: posts } = data;

	return (
		<Container fluid className="mt-2 mb-2">
			<Row>
				<Col className="section">
					{!auth && (
						<h3 className="text-center mt-2 mb-2">
							Registrate y comparte tu Post!
						</h3>
					)}
					<Main posts={posts} loading={loading} />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
