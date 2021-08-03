import './App.css';
import { AuthProvider } from './contex/Auth';
import AppRouter from './Routes/AppRouter';

const App = () => {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
};

export default App;
