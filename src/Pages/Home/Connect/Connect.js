import { Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
// import bg from '../../../images/appointment-bg.png';
import { Box } from '@mui/system';
import MuiButton from '../../../StyledComponents/MuiButton';

// const connectBg = {
// 	background: `url(${bg})`,
// 	marginTop: 150,
// 	backgroundColor: 'rgba(52, 73, 94,0.9)',
// 	backgroundBlendMode: 'darken,luminosity',
// };

const Connect = () => {
	const useStyle = makeStyles({
		root: {
			background: '#3A4256',
			textAlign: 'center',
			padding: '30px',
		},
		textarea: {
			border: 0,
			outline: 0,
			width: '100%',
			margin: '20px 0',
			borderRadius: 3,
			fontFamily: 'inherit',
			padding: 15,
			fontSize: 'inherit',
		},
	});
	const { root, textarea } = useStyle();
	return (
		<Box className={root}>
			<Box>
				<Container maxWidth="md">
					<Typography variant="h6" color="#19D3AE">
						Contact Us
					</Typography>
					<Typography variant="h6" color="#fff">
						Always Connect With Us
					</Typography>

					<TextField
						fullWidth
						placeholder="Email"
						margin="normal"
						sx={{ backgroundColor: '#fff', borderRadius: 1 }}
					/>
					<TextField
						fullWidth
						placeholder="Subject"
						margin="normal"
						sx={{ backgroundColor: '#fff', borderRadius: 1 }}
					/>
					<textarea
						rows={10}
						className={textarea}
						placeholder="Your message"
					></textarea>
					<MuiButton sx={{ width: '35%' }}>Submit</MuiButton>
				</Container>
			</Box>
		</Box>
	);
};

export default Connect;
