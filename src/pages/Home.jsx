import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import OfferBanner from '../components/OfferBanner';
import ShopByCategory from '../components/ShopByCategory';
import Testimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
	return (
		<main>
			<Helmet>
				<meta charSet="utf-8" />
				<title>The Jedi's Trunk | Home</title>
			</Helmet>

			{/* BANNER */}
			<div data-aos="fade-up" data-aos-duration="1000">
				<Banner />
			</div>
			{/* SHOP BY CATEGORY */}
			<div data-aos="zoom-out" data-aos-duration="1000">
				<ShopByCategory />
			</div>
			{/* Offer */}
			<div data-aos="fade-up" data-aos-duration="1000">
				<OfferBanner />
			</div>

			{/* GALLERY */}
			<div
				data-aos="fade-up"
				data-aos-anchor-placement="center-bottom"
				data-aos-duration="1000">
				<Gallery />
			</div>
			{/*  */}
			<div data-aos="fade-up-right" data-aos-duration="1000">
				<Testimonials />
			</div>
		</main>
	);
};

export default Home;
