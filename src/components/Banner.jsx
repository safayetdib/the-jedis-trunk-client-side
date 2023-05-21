import { Carousel, Typography, Button } from '@material-tailwind/react';

export default function Banner() {
	return (
		<section className="mx-auto max-w-7xl px-2">
			<Carousel className="rounded-xl" loop autoplay>
				<div className="relative h-[600px] w-full">
					<img
						src="/assets/banner1.jpg"
						alt="image 1"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
						<div className="w-3/4 text-center md:w-2/4">
							<Typography
								variant="h1"
								color="white"
								className="mb-4 font-cursive text-3xl md:text-4xl lg:text-5xl">
								Collect, <span className="text-lime-500">Play</span> and Display
							</Typography>

							<Typography
								variant="lead"
								color="white"
								className="mb-12 opacity-80">
								Collect, Display, and Expand Your Star Wars Collection: Embrace
								the Legacy of the Galaxy Far, Far Away!
							</Typography>
							<div className="flex-center flex-col gap-2 sm:flex-row">
								<Button size="lg" color="lime">
									Explore
								</Button>
								<Button size="lg" color="white" variant="text">
									Gallery
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="relative h-[600px] w-full">
					<img
						src="/assets/banner2.jpg"
						alt="image 2"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70 text-center">
						<div className="w-3/4 md:w-2/4 md:pl-20 ">
							<Typography
								variant="h1"
								color="white"
								className="mb-4 font-cursive text-3xl md:text-4xl lg:text-5xl">
								May the <span className="text-lime-500">Toys</span> Be with You
							</Typography>
							<Typography
								variant="lead"
								color="white"
								className="mb-12 opacity-80">
								Ignite Your Imagination with Authentic Star Wars Toys: Create
								Your Own Epic Battles and Stories!
							</Typography>
							<div className="flex-center flex-col gap-2 sm:flex-row">
								<Button size="lg" color="lime">
									Explore
								</Button>
								<Button size="lg" color="white" variant="text">
									Gallery
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="relative h-[600px] w-full">
					<img
						src="/assets/banner3.jpg"
						alt="image 3"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70 text-center">
						<div className="w-3/4  md:w-2/4 ">
							<Typography
								variant="h1"
								color="white"
								className="mb-4 font-cursive text-3xl md:text-4xl lg:text-5xl">
								Discover the <span className="text-lime-500">Force</span>
							</Typography>
							<Typography
								variant="lead"
								color="white"
								className="mb-12 opacity-80">
								From Lightsabers to Action Figures: Find Your Favorite
								Characters and Relive Iconic Moments!
							</Typography>
							<div className="flex-center flex-col gap-2 sm:flex-row">
								<Button size="lg" color="lime">
									Explore
								</Button>
								<Button size="lg" color="white" variant="text">
									Gallery
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Carousel>
		</section>
	);
}
