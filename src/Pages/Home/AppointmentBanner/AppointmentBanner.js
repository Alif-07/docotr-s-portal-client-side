import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Typography } from '@mui/material';
import MuiButton from '../../../StyledComponents/MuiButton';

const appointmentBg = {
	background: `url(${bg})`,
	marginTop: 150,
	backgroundColor: 'rgba(52, 73, 94,0.9)',
	backgroundBlendMode: 'darken,luminosity',
};
const AppointmentBanner = () => {
	return (
		<Box style={appointmentBg} sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={1}
				sx={{ display: 'flex', alignItems: 'center' }}
			>
				<Grid item xs={12} md={6} sm={12}>
					<img
						src={doctor}
						alt=""
						style={{ width: '400px', marginTop: '-110px' }}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sm={12}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'start',
					}}
				>
					<Box>
						{' '}
						<Typography
							sx={{ mb: 5 }}
							variant="h6"
							style={{ color: '#1CC7C1' }}
						>
							Appointment
						</Typography>
						<Typography sx={{ my: 5 }} variant="h6" style={{ color: 'white' }}>
							Make An Appointment Today
						</Typography>
						<Typography variant="h7" style={{ color: 'white' }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s.
						</Typography>
						<br />
						{/* <Button
							style={{ backgroundColor: '#5DADE2 ' }}
							sx={{ mt: 5 }}
							variant="contained"
						>
							Learn More
						</Button> */}
						<MuiButton sx={{ mt: 2 }}>Learn More</MuiButton>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AppointmentBanner;
