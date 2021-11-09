import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import { Box } from '@mui/system';

const infoData = [
	{
		title: 'Opening Hours',
		description: 'We are open 7 days',
		Icon: AccessTimeIcon,
		background: '#1CC7C1',
	},
	{
		title: 'Visit Our Location',
		description: 'Brooklyn,NY',
		Icon: LocationOnIcon,
		background: '#3A4256',
	},
	{
		title: 'Call Us Now ',
		description: '+1234567890',
		Icon: WifiCallingIcon,
		background: '#1CC7C1',
	},
];

const InfoCard = () => {
	return (
		<Container>
			<Grid container spacing={3}>
				{infoData.map(({ Icon, title, description, background }) => (
					<Grid item sm={12} md={4}>
						<Paper
							variant="outlined"
							sx={{
								display: 'flex',
								justifyContent: 'space-around',
								background: background,
								color: '#fff',
								p: 3,
							}}
						>
							<Icon sx={{ fontSize: 60 }} />
							<Box>
								<Typography variant="body1">{title}</Typography>
								<Typography variant="subtitle1">{description}</Typography>
							</Box>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default InfoCard;
