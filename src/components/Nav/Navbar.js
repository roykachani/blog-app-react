import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import Logout from '../Logout';
import logo from '../../logo box.png';

const NavStyle = () => {
	return (
		<Navbar bg="dark" className="sticky-top" variant="dark">
			<Container>
				<Navbar.Brand href="/">
					<Image
						src={logo}
						alt="logo"
						style={{ width: '120px', height: '50px' }}
					/>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/create">Crea tu Blog</Nav.Link>
					<Nav.Link href="/pricing"></Nav.Link>
				</Nav>
				<Navbar.Collapse className="justify-content-end">
					<Logout />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavStyle;
