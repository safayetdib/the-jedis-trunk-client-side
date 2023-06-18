import Marquee from 'react-fast-marquee';

const Brands = () => {
	return (
		<section>
			<div className="mb-4 mt-12 border-y border-gray-800 bg-black bg-opacity-70 py-8  text-center text-gray-100">
				<Marquee play pauseOnHover gradient gradientColor={[0, 0, 0]}>
					<img
						src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Hasbro_logo.svg/800px-Hasbro_logo.svg.png"
						alt="Hasbro"
						className="mr-24 h-24"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/800px-LEGO_logo.svg.png"
						alt="Lego"
						className="mr-24 h-24"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mattel_%282019%29.svg/768px-Mattel_%282019%29.svg.png"
						alt="Mattel"
						className="mr-24 h-24"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Playmobil_logo.svg/390px-Playmobil_logo.svg.png"
						alt="PlayMobil"
						className="mr-24 h-24"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/en/2/23/My_Little_Pony_franchise_logo.png"
						alt="Pony"
						className="mr-24 h-24"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/K%27Nex_logo.svg/1920px-K%27Nex_logo.svg.png"
						alt="Knex"
						className="mr-24 h-24"
					/>
				</Marquee>
			</div>
		</section>
	);
};

export default Brands;
