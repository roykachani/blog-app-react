import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './views/Home/Home';

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Router>
	);
};

export default App;
