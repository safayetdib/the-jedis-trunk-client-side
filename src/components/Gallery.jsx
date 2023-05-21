import { Typography } from '@material-tailwind/react';
import React from 'react';

const Gallery = () => {
	return (
		<section className="mx-auto mt-6 max-w-7xl px-2">
			<div className="rounded-xl border border-gray-700 bg-black/70 py-6 text-center  text-gray-100">
				<Typography variant="h2" className="font-cursive tracking-wide">
					Gallery
				</Typography>
				<p className="">
					A Visual Feast for Star Wars Fans: Behold our Stunning Gallery of
					Memorabilia
				</p>
				<div className="container mx-auto mt-4 grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
					<img
						src="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg"
						alt=""
						className="min-h-96 col-span-2 row-span-2 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm md:col-start-3 md:row-start-1"
					/>
					<img
						alt=""
						className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm"
						src="https://cdn.pixabay.com/photo/2017/05/13/17/59/lego-2310286_960_720.jpg"
					/>
					<img
						alt=""
						className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm"
						src="https://cdn.pixabay.com/photo/2017/02/08/09/44/starwars-2048262_640.jpg"
					/>
					<img
						alt=""
						className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm"
						src="https://cdn.pixabay.com/photo/2014/11/02/06/46/temptation-513494_640.jpg"
					/>
					<img
						alt=""
						className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm"
						src="https://cdn.pixabay.com/photo/2017/01/20/14/44/stormtrooper-1995015_640.jpg"
					/>
					<img
						alt=""
						className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm"
						src="https://cdn.pixabay.com/photo/2017/03/25/06/57/star-wars-2172948_640.jpg"
					/>
					<img
						alt=""
						className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm"
						src="https://cdn.pixabay.com/photo/2013/07/19/17/55/spaceship-165353_640.jpg"
					/>
					<img
						alt=""
						className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm"
						src="https://cdn.pixabay.com/photo/2016/11/23/14/41/action-figure-1853285_640.jpg"
					/>
					<img
						alt=""
						className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 object-cover shadow-sm"
						src="https://cdn.pixabay.com/photo/2016/11/23/14/41/characters-1853286_640.jpg"
					/>
					<img
						src="https://target.scene7.com/is/image/Target/SW_1202Toys_Storyblocks_1200x1200_101_BlackSeries207418-191127_1574889407021?wid=668&qlt=80&fmt=webp"
						alt=""
						className="min-h-96 col-span-2 row-span-2 aspect-square h-full w-full rounded bg-gray-500 shadow-sm md:col-start-1 md:row-start-3"
					/>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
