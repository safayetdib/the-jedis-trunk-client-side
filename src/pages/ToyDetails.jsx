import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Helmet } from 'react-helmet';
// import { Button } from '@material-tailwind/react';

const ToyDetails = () => {
	const toyDetails = useLoaderData();
	const {
		photo,
		name,
		price,
		ratings,
		seller,
		seller_email,
		category,
		quantity,
		description,
	} = toyDetails;

	console.log(toyDetails);

	return (
		<main>
			<section>
				<Helmet>
					<meta charSet="utf-8" />
					<title>The Jedi's Trunk | {name}</title>
				</Helmet>
				<div className="relative mx-auto max-w-7xl px-2 py-8">
					<div className="grid grid-cols-1 items-start gap-4 rounded-xl bg-gray-900 p-2 text-gray-100 md:grid-cols-2">
						{/* photo */}
						<div className="h-full">
							<img
								alt={name}
								src={photo}
								className="h-full w-full rounded-xl bg-gray-500 object-cover"
							/>
						</div>

						<div className="p-2">
							{/* category */}
							<strong className="rounded-full bg-lime-500 px-3 py-2 text-sm font-medium tracking-wide text-gray-900">
								{category}
							</strong>
							<div className="mt-3 justify-between sm:flex">
								<div className="space-y-2">
									{/* title */}
									<h1 className="font-cursive text-xl tracking-wider sm:text-2xl">
										{name}
									</h1>

									<p className="text-sm">
										{ratings >= 4
											? `Highest Rated Product`
											: `Don't Trust Ratings`}
									</p>

									{/* rating */}
									<div className="-ms-0.5 flex gap-2">
										<Rating style={{ maxWidth: 80 }} value={ratings} readOnly />
										<span>{ratings}</span>
									</div>
								</div>

								{/* price */}
								<div className="mt-3 h-fit w-fit rounded-xl border-2 border-black bg-lime-500 px-3 py-2 text-xl font-bold text-gray-900 sm:ml-2 sm:mt-0">
									${price}
								</div>
							</div>

							{/* description */}
							<div className="mt-4">
								<div className="prose max-w-none">
									<p>{description}</p>
								</div>

								<Link
									to="https://www.starwars.com/"
									target="_blank"
									className="mt-2 text-sm font-medium underline">
									Read More
								</Link>
							</div>

							{/* color */}
							<div className="mt-4">
								<legend className="mb-1 text-sm font-medium">Color</legend>
								<div className="flex flex-wrap gap-1">
									<label htmlFor="color_tt" className="cursor-pointer">
										<input
											type="radio"
											name="color"
											id="color_tt"
											className="peer sr-only"
										/>
										<span className="group inline-block rounded-full border bg-black px-3 py-1 text-xs font-medium text-white">
											Black
										</span>
									</label>
									<label htmlFor="color_fr" className="cursor-pointer">
										<input
											type="radio"
											name="color"
											id="color_fr"
											className="peer sr-only"
										/>
										<span className="group inline-block rounded-full border bg-red-900 px-3 py-1 text-xs font-medium text-white">
											Red
										</span>
									</label>
									<label htmlFor="color_cb" className="cursor-pointer">
										<input
											type="radio"
											name="color"
											id="color_cb"
											className="peer sr-only"
										/>
										<span className="group inline-block rounded-full border bg-blue-900 px-3 py-1 text-xs font-medium text-white">
											Blue
										</span>
									</label>
								</div>
							</div>

							{/* size */}
							<div className="mt-4">
								<legend className="mb-1 text-sm font-medium">Size</legend>

								<div className="flex flex-wrap gap-1">
									<label htmlFor="size_xs" className="cursor-pointer">
										<input
											type="radio"
											name="size"
											id="size_xs"
											className="peer sr-only"
										/>

										<span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium ">
											XS
										</span>
									</label>

									<label htmlFor="size_s" className="cursor-pointer">
										<input
											type="radio"
											name="size"
											id="size_s"
											className="peer sr-only"
										/>

										<span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
											S
										</span>
									</label>

									<label htmlFor="size_m" className="cursor-pointer">
										<input
											type="radio"
											name="size"
											id="size_m"
											className="peer sr-only"
										/>

										<span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
											M
										</span>
									</label>

									<label htmlFor="size_l" className="cursor-pointer">
										<input
											type="radio"
											name="size"
											id="size_l"
											className="peer sr-only"
										/>

										<span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
											L
										</span>
									</label>

									<label htmlFor="size_xl" className="cursor-pointer">
										<input
											type="radio"
											name="size"
											id="size_xl"
											className="peer sr-only"
										/>

										<span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
											XL
										</span>
									</label>
								</div>
							</div>

							{/* available quantity */}
							<div className="mt-4">
								<legend className="mb-1 text-sm font-medium">Quantity</legend>
								<div className="flex flex-wrap gap-1">
									<span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
										{quantity}
									</span>
								</div>
							</div>

							{/* seller */}
							<div className="mt-4">
								<legend className="mb-1 text-sm font-medium">Seller</legend>
								<div className="flex flex-wrap gap-1">
									<span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
										{seller}
									</span>
								</div>
							</div>

							{/* seller email */}
							<div className="mt-4">
								<legend className="mb-1 text-sm font-medium">
									Seller Email
								</legend>
								<div className="flex flex-wrap gap-1">
									<span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
										{seller_email}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ToyDetails;
