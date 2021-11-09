import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<PrivateRoute exact path="/appointment">
						<Appointment />
					</PrivateRoute>
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
