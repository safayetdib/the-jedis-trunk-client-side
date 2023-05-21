import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import OfferBanner from '../components/OfferBanner';
import ShopByCategory from '../components/ShopByCategory';
import Testimonials from '../components/Testimonials';

const Home = () => {
	return (
		<main>
			{/* BANNER */}
			<Banner />
			{/* SHOP BY CATEGORY */}
			<ShopByCategory />
			{/* Offer */}
			<OfferBanner />
			{/* GALLERY */}
			<Gallery />
			{/*  */}
			<Testimonials />
		</main>
	);
};

export default Home;
