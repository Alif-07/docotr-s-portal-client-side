import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Connect from './Connect/Connect';
import ExceptionalFeatures from './ExceptionalFeatures/ExceptionalFeatures';
import Footer from './Footer/Footer';
import InfoCard from './InfoCard/InfoCard';
import OurDoctors from './OurDoctors/OurDoctors';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
	return (
		<div>
			<Navigation />
			<Banner />
			<InfoCard />
			<Services />
			<ExceptionalFeatures />
			<AppointmentBanner />
			<Testimonial />
			<OurDoctors />
			<Connect />
			<Footer />
		</div>
	);
};

export default Home;
