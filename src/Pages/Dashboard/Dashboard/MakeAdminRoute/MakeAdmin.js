import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const { token } = useAuth();

	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};

	const handleAdminSubmit = (e) => {
		const user = { email };
		fetch('http://localhost:5000/users/admin', {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					console.log(data);
					// setEmail('');
					setSuccess(true);
				}
			});
		e.preventDefault();
	};

	return (
		<Box
			maxWidth="md"
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Typography sx={{ mb: 5 }} variant="h5">
				Make Admin
			</Typography>
			<form onSubmit={handleAdminSubmit}>
				<Box>
					<TextField
						id="standard-basic"
						label="Email"
						type="email"
						onBlur={handleOnBlur}
						variant="standard"
						sx={{ width: '60%' }}
					/>
					<Button type="submit" variant="outlined">
						Make Admin
					</Button>
				</Box>
			</form>
			{success && <Alert severity="success">Made Admin Successfully!</Alert>}
		</Box>
	);
};

export default MakeAdmin;
