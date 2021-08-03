import { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contex/Auth';

const Logout = () => {
	const { auth, exit } = useContext(AuthContext);

	const history = useHistory();

	const handlerLog = () => {
		exit();
		history.push('/');
	};

	if (!!auth) return <Button onClick={handlerLog}>Logout</Button>;
	return (
		<>
			<Button style={{ margin: '0 2px' }}>
				<Link to="/register" style={{ color: 'white' }}>
					Registrate
				</Link>
			</Button>
			<Button style={{ margin: '0 2px' }}>
				<Link to="/login" style={{ color: 'white' }}>
					login
				</Link>
			</Button>
		</>
	);
};

export default Logout;
