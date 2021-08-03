import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import CreateBlog from '../views/CreateBlog/CreateBlog';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../views/Home/Home';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<PrivateRoute path="/create" component={CreateBlog} />
				<Redirect to="/login" />
			</Switch>
		</Router>
	);
};
export default AppRouter;
