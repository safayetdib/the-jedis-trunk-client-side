import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import OfferBanner from '../components/OfferBanner';
import ShopByCategory from '../components/ShopByCategory';
import Testimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet';
import Brands from '../components/Brands';
import Faqs from '../components/Faqs';
import NewsLetter from '../components/NewsLetter';
import Featured from '../components/Featured';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {
	return (
		<main>
			<Helmet>
				<meta charSet="utf-8" />
				<title>The Jedi&apos;s Trunk | Home</title>
			</Helmet>

			<div data-aos="fade-up">
				<Banner />
			</div>

			<Featured />

			<Brands />

			<ShopByCategory />

			<OfferBanner />

			<Testimonials />

			<NewsLetter />

			<Faqs />

			<Gallery />
		</main>
	);
};

export default Home;
