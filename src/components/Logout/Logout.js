import { useContext } from 'react';

import { Button, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contex/Auth';

const Logout = () => {
	const { dataResponse, auth, exit } = useContext(AuthContext);

	const history = useHistory();

	const handlerLog = () => {
		exit();
		history.push('/');
	};

	if (!!auth && !!dataResponse) {
		const { user } = dataResponse;
		return (
			<Navbar.Text>
				Signed in as: <a href="#user">{user}</a>
				<Button bg="dark" variant="dark" className="m-2" onClick={handlerLog}>
					Logout
				</Button>
			</Navbar.Text>
		);
	}
	return (
		<>
			<Button bg="dark" variant="dark" style={{ margin: '0 2px' }}>
				<Link to="/register" style={{ color: 'white' }}>
					Registrate
				</Link>
			</Button>
			<Button bg="dark" variant="dark" style={{ margin: '0 2px' }}>
				<Link to="/login" style={{ color: 'white' }}>
					login
				</Link>
			</Button>
		</>
	);
};

export default Logout;
