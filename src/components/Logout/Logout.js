import { memo, useContext } from 'react';

import { Button, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contex/Auth';
import ButtonLink from '../ButtonLink/ButtonLink';

const Logout = () => {
	const { dataResponse, auth, exit } = useContext(AuthContext);

	const history = useHistory();

	const handlerLog = () => {
		exit();
		history.push('/');
	};

	if (!!auth && !!dataResponse) {
		console.log(dataResponse);
		return (
			<Navbar.Text>
				Bienvenido: <ButtonLink {...dataResponse} />
				{/* <Link to={`/users/Profile/${id}`}>{user}</Link> */}
				<Button bg="dark" variant="dark" className="m-2" onClick={handlerLog}>
					Logout
				</Button>
			</Navbar.Text>
		);
	}
	return (
		<>
			<Link to="/register" style={{ color: 'white' }}>
				<Button bg="dark" variant="dark" style={{ margin: '0 2px' }}>
					Registrate
				</Button>
			</Link>
			<Link to="/login" style={{ color: 'white' }}>
				<Button bg="dark" variant="dark" style={{ margin: '0 2px' }}>
					login
				</Button>
			</Link>
		</>
	);
};

export default memo(Logout);
