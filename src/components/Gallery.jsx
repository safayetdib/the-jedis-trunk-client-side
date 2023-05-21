import React from 'react';

const Gallery = () => {
	return (
		<section className="mx-auto max-w-7xl bg-gray-800 px-2 py-6 text-gray-50">
			<div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
				<img
					src="https://source.unsplash.com/random/301x301/"
					alt=""
					className="min-h-96 col-span-2 row-span-2 aspect-square h-full w-full rounded bg-gray-500 shadow-sm md:col-start-3 md:row-start-1"
				/>
				<img
					alt=""
					className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 shadow-sm"
					src="https://source.unsplash.com/random/200x200/?0"
				/>
				<img
					alt=""
					className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 shadow-sm"
					src="https://source.unsplash.com/random/200x200/?1"
				/>
				<img
					alt=""
					className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 shadow-sm"
					src="https://source.unsplash.com/random/200x200/?2"
				/>
				<img
					alt=""
					className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 shadow-sm"
					src="https://source.unsplash.com/random/200x200/?3"
				/>
				<img
					alt=""
					className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 shadow-sm"
					src="https://source.unsplash.com/random/200x200/?4"
				/>
				<img
					alt=""
					className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 shadow-sm"
					src="https://source.unsplash.com/random/200x200/?5"
				/>
				<img
					alt=""
					className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 shadow-sm"
					src="https://source.unsplash.com/random/200x200/?6"
				/>
				<img
					alt=""
					className="min-h-48 aspect-square h-full w-full rounded bg-gray-500 shadow-sm"
					src="https://source.unsplash.com/random/200x200/?7"
				/>
				<img
					src="https://source.unsplash.com/random/302x302/"
					alt=""
					className="min-h-96 col-span-2 row-span-2 aspect-square h-full w-full rounded bg-gray-500 shadow-sm md:col-start-1 md:row-start-3"
				/>
			</div>
		</section>
	);
};

export default Gallery;
