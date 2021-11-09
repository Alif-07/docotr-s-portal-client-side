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
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';
const Register = () => {
	const { user, registerUser, isLoading, authError } = useAuth();
	const [registerData, setRegisterData] = useState({});

	const history = useHistory();

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newRegisterData = { ...registerData };
		newRegisterData[field] = value;

		setRegisterData(newRegisterData);
	};
	const handleRegister = (e) => {
		if (registerData.password !== registerData.password2) {
			alert('Password did not match');
			return;
		}
		registerUser(
			registerData.email,
			registerData.password,
			registerData.name,
			history
		);
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
						Register
					</Typography>
					{!isLoading && (
						<form onSubmit={handleRegister}>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								name="name"
								type="text"
								onBlur={handleOnBlur}
								label="Your name"
								variant="standard"
							/>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								name="email"
								type="email"
								onBlur={handleOnBlur}
								label="Your Email"
								variant="standard"
							/>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								label="Your Password"
								type="password"
								name="password"
								onBlur={handleOnBlur}
								variant="standard"
							/>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								label="Re-type Your Password"
								type="password"
								name="password2"
								onBlur={handleOnBlur}
								variant="standard"
							/>
							<Button
								type="submit"
								sx={{ mt: 2, width: '75%' }}
								variant="contained"
							>
								Register
							</Button>
						</form>
					)}
					{isLoading && <CircularProgress />}
					{user?.email && (
						<Alert severity="success">User Created Successfully!</Alert>
					)}
					{authError && <Alert severity="error">{authError}</Alert>}
					<Link style={{ textDecoration: 'none' }} to="/login">
						<Button
							type="submit"
							sx={{ mt: 2, width: '85%' }}
							variant="contained"
						>
							Already Registered? Login
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12} md={6}>
					<img src={login} style={{ width: '100%' }} alt="" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Register;
