import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Main from '../../components/common/Main';
import { useFetch } from '../../hooks/useFetch';
import { AuthContext } from '../../contex/Auth';
import './style.css';

const Home = () => {
	const [data, loading] = useFetch();
	const { result: posts } = data;

	const { auth } = useContext(AuthContext);

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
