import { Button } from '@material-tailwind/react';

const OfferBanner = () => {
	return (
		<section className="mx-auto mt-4 max-w-7xl px-2">
			<div className="rounded-xl bg-gray-900/90 p-6 py-6 text-gray-200">
				<div className="container mx-auto">
					<div className="flex flex-col items-center justify-between lg:flex-row">
						<div>
							<h2 className="font-cursive text-base font-bold tracking-wide">
								Unleash the <span className="text-gray-500">Dark Side</span> for
								Less! <br />
								<span className="text-2xl text-lime-500">
									Enjoy a Massive 50%{' '}
								</span>
								<br />
								Discount on <span className="text-red-600">
									Darth Vader
								</span>{' '}
								Toys!
							</h2>
						</div>
						<div className="space-x-2 py-2 text-center lg:py-0">
							<img src="/assets/offer.png" alt="" className="h-40" />
						</div>
						<Button variant="gradient" color="lime" className="shadow-none">
							Shop Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OfferBanner;
