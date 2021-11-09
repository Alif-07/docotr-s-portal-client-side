import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';
import MuiButton from '../../../StyledComponents/MuiButton';

const Booking = ({ booking, date, setBookingSuccess }) => {
	const { name, time, space } = booking;
	const [openBooking, setOpenBooking] = React.useState(false);
	const handleBookingOpen = () => setOpenBooking(true);
	const handleBookingClose = () => setOpenBooking(false);
	return (
		<>
			<Grid item xs={12} sm={6} md={4}>
				<Paper
					elevation={3}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						py: 5,
					}}
				>
					<Typography
						sx={{ color: '#1CC7C1', fontWeight: 600 }}
						variant="h5"
						gutterBottom
						component="div"
					>
						{name}
					</Typography>
					<Typography variant="h6" gutterBottom component="div">
						{time}
					</Typography>
					<Typography variant="caption" display="block" gutterBottom>
						{space} SPACES AVAILABLE
					</Typography>
					{/* <Button onClick={handleBookingOpen} variant="contained">
						Book Appointment
					</Button> */}
					<MuiButton onClick={handleBookingOpen} variant="contained">
						Book Appointment
					</MuiButton>
				</Paper>
			</Grid>
			<BookingModal
				booking={booking}
				openBooking={openBooking}
				handleBookingClose={handleBookingClose}
				date={date}
				setBookingSuccess={setBookingSuccess}
			/>
		</>
	);
};

export default Booking;
