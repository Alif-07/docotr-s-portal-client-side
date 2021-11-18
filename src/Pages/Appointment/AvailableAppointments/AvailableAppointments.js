import { Alert, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
	{
		id: 1,
		name: 'Teeth Orthodonics',
		time: '08.00 AM - 09.00 AM',
		space: 10,
		price: 28,
	},
	{
		id: 2,
		name: 'Cosmetic Dentistry',
		time: '09.00 AM - 10.00 AM',
		space: 8,
		price: 27,
	},
	{
		id: 3,
		name: 'Teeth Cleaning',
		time: '10.00 AM - 11.00 AM',
		space: 9,
		price: 24,
	},
	{
		id: 4,
		name: 'Cavity Protection',
		time: '11.00 AM - 12.00 PM',
		space: 5,
		price: 22,
	},
	{
		id: 5,
		name: 'Pediatric Dental',
		time: '06.00 PM - 07.00 PM',
		space: 10,
		price: 25,
	},
	{
		id: 6,
		name: 'Oral Surgery',
		time: '07.00 PM - 08.00 PM',
		space: 10,
		price: 20,
	},
];

const AvailableAppointments = ({ date }) => {
	const [bookingSuccess, setBookingSuccess] = useState(false);
	return (
		<Container>
			<Typography
				variant="h5"
				sx={{ color: '#1CC7C1', fontWeight: 400, mb: 3, textAlign: 'center' }}
			>
				Available Appointment on {date.toDateString()}
			</Typography>

			{bookingSuccess && (
				<Alert sx={{ mx: 'auto', width: 200, my: 2 }}>Booking Successful</Alert>
			)}

			<Grid container spacing={2}>
				{bookings.map((booking) => (
					<Booking
						key={booking.id}
						booking={booking}
						date={date}
						setBookingSuccess={setBookingSuccess}
					/>
				))}
			</Grid>
		</Container>
	);
};

export default AvailableAppointments;
