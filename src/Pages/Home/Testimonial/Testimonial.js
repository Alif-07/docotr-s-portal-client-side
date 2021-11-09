import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const reviews = [
	{
		id: 1,
		name: 'Ross Geller',
		reviews: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
		img: 'https://i.ibb.co/nw2Kbpg/people-1.png',
		city: 'texas',
	},
	{
		id: 2,
		name: 'Racheal Bloom',
		reviews: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
		img: 'https://i.ibb.co/1q83z8P/people-2.png',
		city: 'texas',
	},
	{
		id: 3,
		name: 'Monica Geller',
		reviews: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
		img: 'https://i.ibb.co/LvVh5hX/people-3.png',
		city: 'texas',
	},
];

const Testimonial = () => {
	return (
		<Container sx={{ pb: 5 }}>
			<Box style={{ textAlign: 'left' }}>
				<Typography
					sx={{ mt: 5, pt: 5 }}
					variant="h6"
					style={{ color: '#1CC7C1' }}
				>
					Appointment
				</Typography>
				<Typography sx={{ mt: 1, mb: 5 }} variant="h4">
					What's Our Patients <br /> Says
				</Typography>
			</Box>
			<Box>
				<Grid container spacing={1}>
					{reviews.map((r) => (
						<Grid item xs={6} md={4}>
							<Card sx={{ minWidth: 275 }}>
								<CardContent>
									<Typography
										sx={{ fontSize: 14 }}
										color="text.secondary"
										gutterBottom
									>
										{r?.reviews}
									</Typography>
								</CardContent>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-evenly',
										alignItems: 'center',
										py: 2,
									}}
								>
									<img style={{ width: '80px' }} src={r?.img} alt="" />
									<Box>
										<Typography sx={{ color: '#1CC7C1' }} variant="subtitle1">
											{r?.name}
										</Typography>
										<Typography sx={{ fontSize: 12 }} gutterBottom>
											{r?.city}
										</Typography>
									</Box>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default Testimonial;
