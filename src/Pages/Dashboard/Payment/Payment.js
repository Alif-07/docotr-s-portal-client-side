import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
	'pk_test_51JwoGSClHdgKAoZbVEKxpBElGtzHZ0CdDuIOK1gCU88XW6AkJkdsy39diKFhPulWyeThtsND3GwCGwRBncjYQvEy00RGUalQKC'
);

const Payment = () => {
	const { appointmentId } = useParams();
	const [appointment, setAppointment] = useState({});

	useEffect(() => {
		const url = `http://localhost:5000/appointments/%{appointmentId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setAppointment(data));
	}, [appointmentId]);
	return (
		<div>
			<h1>Please pay for: {appointmentId}</h1>
			<Elements stripe={stripePromise}>
				<CheckoutForm appointment={appointment} />
			</Elements>
		</div>
	);
};

export default Payment;
