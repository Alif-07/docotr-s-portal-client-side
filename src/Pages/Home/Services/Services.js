import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
	{
		name: 'Fluoride Treatment',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		img: fluoride,
	},
	{
		name: 'Cavity Filling',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		img: cavity,
	},
	{
		name: 'Teeth Whitening',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		img: whitening,
	},
];

const Services = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Container>
				<Typography
					sx={{
						fontWeight: 600,
						m: 2,
						textAlign: 'center',
						color: '#1CC7C1',
					}}
					variant="h6"
					component="div"
				>
					Our Services
				</Typography>
				<Typography
					sx={{ fontWeight: 600, m: 3, textAlign: 'center' }}
					variant="h4"
					component="div"
				>
					Services we provide
				</Typography>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{services.map((service) => (
						<Service service={service} key={service.name} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Services;
