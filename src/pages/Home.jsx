import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import OfferBanner from '../components/OfferBanner';
import ShopByCategory from '../components/ShopByCategory';

const Home = () => {
	return (
		<main>
			{/* BANNER */}
			<Banner />
			{/* Offer */}
			<OfferBanner />
			{/* SHOP BY CATEGORY */}
			<ShopByCategory />
			{/* GALLERY */}
			<Gallery />
		</main>
	);
};

export default Home;
