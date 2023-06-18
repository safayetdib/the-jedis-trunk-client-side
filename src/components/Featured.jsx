import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Featured = () => {
	return (
		<section className="mt-8">
			<div className="mx-auto max-w-7xl px-4 ">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
					<div
						data-aos="zoom-in"
						data-aos-duration="200"
						className="grid place-content-center rounded bg-black/60 bg-[url(https://images.unsplash.com/photo-1481241857164-e8483bce922d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80)] bg-cover bg-fixed p-6 bg-blend-multiply sm:p-8">
						<div className="mx-auto max-w-md  text-center lg:text-left">
							<header>
								<h2 className="text-xl font-bold text-gray-50 sm:text-3xl">
									Lego Sets
								</h2>

								<p className="mt-4 text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
									rerum quam amet provident nulla error!
								</p>
							</header>

							<Link to="/toys" className="mt-6 block">
								<Button variant="gradient" color="lime" className="shadow-none">
									Shop All
								</Button>
							</Link>
						</div>
					</div>

					<div className="lg:col-span-2">
						<ul className="grid grid-cols-2 gap-4">
							<li>
								<Link
									data-aos="zoom-in"
									data-aos-duration="400"
									to="/toys"
									className="group block  bg-black/75">
									<div className="overflow-hidden">
										<img
											src="https://images.unsplash.com/photo-1598899450636-3c62c5332a35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
											alt=""
											className="aspect-square w-full  rounded object-cover transition-all duration-500 group-hover:scale-110"
										/>
									</div>

									<div className="mt-3">
										<h3 className="font-medium text-gray-100 group-hover:underline group-hover:underline-offset-4">
											Funko Pop! Star Wars: YODA
										</h3>

										<p className="mt-1 text-sm text-gray-50">$250</p>
									</div>
								</Link>
							</li>

							<li>
								<Link
									data-aos="zoom-in"
									data-aos-duration="500"
									to="/toys"
									className="group block  bg-black/75">
									<div className="overflow-hidden">
										<img
											src="https://images.unsplash.com/photo-1592435468595-ab8dd76cd754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80"
											alt=""
											className="aspect-square w-full  rounded object-cover transition-all duration-500 group-hover:scale-110"
										/>
									</div>

									<div className="mt-3">
										<h3 className="font-medium text-gray-100 group-hover:underline group-hover:underline-offset-4">
											Sith Trooper
										</h3>

										<p className="mt-1 text-sm text-gray-50">$150</p>
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
