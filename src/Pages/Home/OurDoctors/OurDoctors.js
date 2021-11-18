import React from 'react';
import { Container, Divider, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CallIcon from '@mui/icons-material/Call';

const doctors = [
	{
		id: 1,
		name: 'Dr. Shamim Boksha',
		img: 'https://i.ibb.co/SK6w2mH/doctor-small.png',
		number: '+123456789',
	},
	{
		id: 2,
		name: 'Dr. Uttam Shet',
		img: 'https://i.ibb.co/SK6w2mH/doctor-small.png',
		number: '+123456789',
	},
	{
		id: 1,
		name: 'Dr. Mahmood Sajedeen',
		img: 'https://i.ibb.co/SK6w2mH/doctor-small.png',
		number: '+123456789',
	},
];

const OurDoctors = () => {
	return (
		<Container>
			<Typography
				sx={{ mt: 5, pt: 5, textAlign: 'center' }}
				variant="h4"
				style={{ color: '#1CC7C1' }}
			>
				Our Doctors
			</Typography>
			<Divider sx={{ width: '18%', mx: 'auto', bgcolor: '#1CC7C1' }} />
			<Box sx={{ my: 3 }}>
				<Grid container spacing={2}>
					{doctors.map((d) => (
						<Grid item xs={6} md={4}>
							<Paper
								elevation={12}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									py: 3,
								}}
							>
								<img alt="doctor" src={d?.img} style={{ width: '50%' }} />
								<Typography
									sx={{ color: '#1CC7C1', py: 2 }}
									variant="h6"
									gutterBottom
									component="div"
								>
									{d?.name}
								</Typography>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-evenly',
										width: '150px',
									}}
								>
									<CallIcon sx={{ color: '#1CC7C1' }} />
									<Typography
										sx={{ color: '#1CC7C1' }}
										variant="button"
										display="block"
										gutterBottom
									>
										{d?.number}
									</Typography>
								</Box>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default OurDoctors;
