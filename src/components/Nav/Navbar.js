import { Navbar, Container, Nav } from 'react-bootstrap';
import Logout from '../Logout/Logout';

const NavStyle = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">
					<h1>ReBloG!</h1>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/create">Crea tu Blog</Nav.Link>
					<Nav.Link href="/pricing">Pricing</Nav.Link>
				</Nav>
				<Navbar.Collapse className="justify-content-end">
					<Logout />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavStyle;
