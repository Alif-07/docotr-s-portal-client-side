import {
	Alert,
	Button,
	CircularProgress,
	Container,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
	const { user, loginUser, isLoading, authError, googleSignIn } = useAuth();
	const [loginData, setLoginData] = useState({});

	const location = useLocation();
	const history = useHistory();

	const handleGoogleSignIn = () => {
		googleSignIn(location, history);
	};
	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		console.log(newLoginData[field]);
		setLoginData(newLoginData);
	};
	const handleLogin = (e) => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	};
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
					}}
					item
					xs={12}
					md={6}
				>
					<Typography variant="body1" gutterBottom>
						Login
					</Typography>
					{!isLoading && (
						<form onSubmit={handleLogin}>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								name="email"
								onChange={handleOnChange}
								label="Your Email"
								variant="standard"
							/>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								label="Your Password"
								type="password"
								name="password"
								onChange={handleOnChange}
								variant="standard"
							/>
							<Button
								type="submit"
								sx={{ mt: 2, width: '75%' }}
								variant="contained"
							>
								Login
							</Button>
						</form>
					)}
					{isLoading && <CircularProgress />}
					{user?.email && <Alert severity="success">User is LoggedIn!</Alert>}
					{authError && <Alert severity="error">{authError}</Alert>}
					<Link style={{ textDecoration: 'none' }} to="/register">
						<Button
							type="submit"
							sx={{ mt: 2, width: '100%' }}
							variant="contained"
						>
							New User? Register
						</Button>
					</Link>
					<br />
					<Button
						onClick={handleGoogleSignIn}
						variant="contained"
						color="success"
					>
						Sign in By Google
					</Button>
				</Grid>
				<Grid item xs={12} md={6}>
					<img src={login} style={{ width: '100%' }} alt="" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
