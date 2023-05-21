import { Typography } from '@material-tailwind/react';

const Testimonials = () => {
	return (
		<section className="">
			<div className="mb-4 mt-12 border-y border-gray-800 bg-black bg-opacity-70 py-4 text-center  text-gray-100">
				<Typography variant="h3" className="font-cursive tracking-wide">
					Testimonials
				</Typography>
				<p>
					Join the Ranks of Satisfied Customers: Read Their Star Wars Toy
					Reviews
				</p>
			</div>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
					<div className="mb-8 sm:break-inside-avoid">
						<blockquote className="rounded-xl bg-gray-50 p-6 shadow">
							<p className="leading-relaxed text-gray-700">
								The quality and detail of the Star Wars toys I received from
								this website exceeded my expectations. As a long-time fan, I'm
								thrilled to add these collectibles to my collection!
							</p>
						</blockquote>

						<div className="mt-4 flex items-center gap-4">
							<img
								alt="Woman"
								src="https://randomuser.me/api/portraits/thumb/women/9.jpg"
								className="h-12 w-12 rounded-full object-cover"
							/>

							<div className="rounded-md bg-lime-500 p-2 text-sm">
								<p className="font-medium">Sarah H.</p>
							</div>
						</div>
					</div>

					<div className="mb-8 sm:break-inside-avoid">
						<blockquote className="rounded-xl bg-gray-50 p-6 shadow">
							<p className="leading-relaxed text-gray-700">
								The customer service provided by this website was exceptional.
								They promptly answered my inquiries and ensured a smooth
								shopping experience. I highly recommend them!
							</p>
						</blockquote>

						<div className="mt-4 flex items-center gap-4">
							<img
								alt="man"
								src="https://randomuser.me/api/portraits/thumb/men/8.jpg"
								className="h-12 w-12 rounded-full object-cover"
							/>

							<div className="rounded-md bg-lime-500 p-2 text-sm">
								<p className="font-medium">Michael R.</p>
							</div>
						</div>
					</div>

					<div className="mb-8 sm:break-inside-avoid">
						<blockquote className="rounded-xl bg-gray-50 p-6 shadow">
							<p className="leading-relaxed text-gray-700">
								I couldn't be happier with my purchase! The Darth Vader action
								figure I received is of outstanding quality, and it arrived in
								perfect condition. Thank you for an amazing product!
							</p>
						</blockquote>

						<div className="mt-4 flex items-center gap-4">
							<img
								alt="Woman"
								src="https://randomuser.me/api/portraits/thumb/women/7.jpg"
								className="h-12 w-12 rounded-full object-cover"
							/>

							<div className="rounded-md bg-lime-500 p-2 text-sm">
								<p className="font-medium">Emily T.</p>
							</div>
						</div>
					</div>

					<div className="mb-8 sm:break-inside-avoid">
						<blockquote className="rounded-xl bg-gray-50 p-6 shadow">
							<p className="leading-relaxed text-gray-700">
								This website offers an impressive selection of Star Wars LEGO
								sets. I bought one for my son, and he absolutely loves it. The
								attention to detail and the hours of entertainment it provides
								are worth every penny.
							</p>
						</blockquote>

						<div className="mt-4 flex items-center gap-4">
							<img
								alt="man"
								src="https://randomuser.me/api/portraits/thumb/men/6.jpg"
								className="h-12 w-12 rounded-full object-cover"
							/>
							<div className="rounded-md bg-lime-500 p-2 text-sm">
								<p className="font-medium">David M.</p>
							</div>
						</div>
					</div>

					<div className="mb-8 sm:break-inside-avoid">
						<blockquote className="rounded-xl bg-gray-50 p-6 shadow">
							<p className="leading-relaxed text-gray-700">
								I was searching for a specific lightsaber replica, and this
								website had exactly what I was looking for. The attention to
								detail and the authentic design are simply remarkable. I'm
								extremely satisfied with my purchase!
							</p>
						</blockquote>

						<div className="mt-4 flex items-center gap-4">
							<img
								alt="Woman"
								src="https://randomuser.me/api/portraits/thumb/women/5.jpg"
								className="h-12 w-12 rounded-full object-cover"
							/>

							<div className="rounded-md bg-lime-500 p-2 text-sm">
								<p className="font-medium">Lisa K.</p>
							</div>
						</div>
					</div>

					<div className="mb-8 sm:break-inside-avoid">
						<blockquote className="rounded-xl bg-gray-50 p-6 shadow">
							<p className="leading-relaxed text-gray-700">
								I recently purchased a Star Wars action figure gift set from
								this website, and it made the perfect present for my friend. The
								packaging was pristine, and the figures were top-notch quality.
								Highly recommended!
							</p>
						</blockquote>

						<div className="mt-4 flex items-center gap-4 ">
							<img
								alt="man"
								src="https://randomuser.me/api/portraits/thumb/men/5.jpg"
								className="h-12 w-12 rounded-full object-cover"
							/>

							<div className="rounded-md bg-lime-500 p-2 text-sm">
								<p className="font-medium">Steven G.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
