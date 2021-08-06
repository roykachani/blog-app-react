import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import CreateBlog from '../views/CreateBlog/CreateBlog';

import Regist from '../views/Regist/Regist';
import Home from '../views/Home/Home';
import Header from '../components/common/Header';
import LoginPage from '../views/Login/LoginPage';
import Footer from '../components/common/Footer';

const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={Regist} />
				<PrivateRoute path="/create" component={CreateBlog} />
				<Redirect to="/login" />
			</Switch>
			<Footer />
		</Router>
	);
};
export default AppRouter;
