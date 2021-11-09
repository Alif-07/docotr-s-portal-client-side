import * as React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import DashboardAppointments from '../Dashboard/Appointments/DashboardAppointments';

const DashboardHome = () => {
	const [date, setDate] = React.useState(new Date());

	return (
		<Grid container spacing={1}>
			<Grid item xs={12} md={5}>
				<Calendar date={date} setDate={setDate} />
			</Grid>
			<Grid item xs={12} md={7}>
				<DashboardAppointments date={date} />
			</Grid>
		</Grid>
	);
};

export default DashboardHome;
