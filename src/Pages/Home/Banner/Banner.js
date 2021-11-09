import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MuiButton from '../../../StyledComponents/MuiButton';

const verticalCenter = {
	display: 'flex',
	height: 350,
	alignItems: 'center',
};
const bannerStyle = {
	minHeight: 400,
	height: '70vh',
	display: 'flex',
	alignItems: 'center',
	background: `url()`,
};
const Banner = () => {
	return (
		<Box style={bannerStyle}>
			<Container sx={{ flexGrow: 1 }}>
				<Grid
					style={{ display: 'flex', flexDirection: 'row' }}
					container
					spacing={2}
				>
					<Grid
						item
						style={{ ...verticalCenter, textAlign: 'left' }}
						xs={12}
						md={6}
					>
						<Box>
							<Typography variant="h3">
								Your New Smile <br />
								Starts Here
							</Typography>
							<Typography
								variant="body1"
								sx={{
									my: 4,
									fontSize: 13,
									color: 'gray',
									fontWeight: 300,
									lineHeight: 1.5,
								}}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
								atque provident perferendis ad a dignissimos nulla. Aperiam
								similique aut tempore?
							</Typography>
							{/* <Button
							style={{ backgroundColor: '#5DADE2 ' }}
							sx={{ mt: 5 }}
							variant="contained"
						>
							Get Appoinment
						</Button> */}
							<MuiButton>Get Appointment</MuiButton>
						</Box>
					</Grid>

					<Grid item style={verticalCenter} xs={12} md={6}>
						<img style={{ width: '100%' }} src={chair} alt="" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Banner;
