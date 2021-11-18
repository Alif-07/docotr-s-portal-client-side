import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png';
import MuiButton from '../../../StyledComponents/MuiButton';

const ExceptionalFeatures = () => {
	return (
		<Container sx={{ pt: 3 }}>
			<Grid container spacing={1} sx={{ my: 3 }}>
				<Grid item xs={12} md={5}>
					<img style={{ width: 300 }} src={treatment} alt="" />
				</Grid>
				<Grid item xs={12} md={7} sx={{ mt: 3 }}>
					<Box style={{ textAlign: 'left', pt: 5, mt: 5 }}>
						<Typography variant="h4" style={{ fontWeight: 400 }}>
							Exceptional Dental <br /> Care On Your Terms
						</Typography>
						<Typography variant="body1" sx={{ color: 'text.secondary', my: 4 }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
							blanditiis tenetur unde suscipit, quam beatae rerum inventore
							consectetur, neque doloribus, cupiditate numquam dignissimos
							laborum fugiat deleniti? Eum quasi quidem quibusdam.
						</Typography>
						{/* <Button
							style={{ backgroundColor: '#5DADE2 ' }}
							sx={{ mt: 5 }}
							variant="contained"
						>
							Learn More
						</Button> */}
						<MuiButton>Learn More</MuiButton>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ExceptionalFeatures;
