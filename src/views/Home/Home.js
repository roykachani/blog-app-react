import { StrictMode, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Main from '../../components/common/Main';
import { useFetch } from '../../hooks/useFetch';
import Logout from '../../components/Logout/Logout';
import { AuthContext } from '../../contex/Auth';
import './style.css';

const Home = () => {
	const [data, loading] = useFetch();
	const { result: posts } = data;

	const { auth } = useContext(AuthContext);

	// const renderLog = () => {
	// 	if (!!auth) return <Logout />;

	// 	return (
	// 		<>
	// 			<Link to="/register">Registrate</Link>
	// 			<Link to="/login">login</Link>
	// 		</>
	// 	);
	// };

	return (
		<Container fluid>
			<Row className="p-0">
				<Col className="p-0">
					<Header />
				</Col>
			</Row>
			<Row>
				{/* <Col md={2}>
					<StrictMode>
						<Logout />
					</StrictMode>
				</Col> */}
				<Col className="section">
					{!auth && (
						<h3 className="text-center">Registrate y comparte tu Post!</h3>
					)}
					<Main posts={posts} loading={loading} />
				</Col>
			</Row>
			<Row md={1}>
				<Footer />
			</Row>
		</Container>
	);
};

export default Home;
