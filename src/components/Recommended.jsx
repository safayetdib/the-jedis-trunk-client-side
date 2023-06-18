import { Typography } from '@material-tailwind/react';
import RecommendedCard from './RecommendedCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Recommended = () => {
	const [recommendedToys, setRecommendedToys] = useState([]);

	useEffect(() => {
		fetch(`https://the-jedis-trunk-server-side.vercel.app/toys`)
			.then((res) => res.json())
			.then((data) => setRecommendedToys(data));
	}, [recommendedToys]);

	return (
		<section className="mx-auto max-w-7xl px-2">
			<div className="mb-4 mt-6 rounded-xl border border-gray-800 bg-black  bg-opacity-70 py-4 text-center text-gray-100">
				<Typography variant="h3" className="font-cursive tracking-wide">
					Your Gateway to Star Wars Toy Excellence
				</Typography>
				<p>
					Discover Star Wars Toys and Collectibles Tailored to Your Galactic
					Adventures
				</p>
			</div>
		</section>
	);
};

export default Recommended;
