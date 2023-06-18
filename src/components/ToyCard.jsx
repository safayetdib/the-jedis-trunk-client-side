import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Popover,
	PopoverHandler,
	PopoverContent,
} from '@material-tailwind/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Tilt from 'react-parallax-tilt';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const ToyCard = ({ toy }) => {
	const { _id, photo, name, price, ratings } = toy;

	const { user } = useContext(AuthContext);

	return (
		<Tilt
			tiltMaxAngleX={5}
			tiltMaxAngleY={5}
			glareEnable={true}
			glareMaxOpacity={0.2}
			glareColor="#ffffff"
			glarePosition="bottom"
			glareBorderRadius="10px"
			className="block h-full w-full">
			<Card
				data-aos="fade-up"
				data-aos-anchor-placement="top-bottom"
				variant="gradient"
				className="flex h-full w-full flex-col justify-between rounded-xl border border-gray-800 bg-black">
				<CardHeader floated={false} className="relative h-60 bg-gray-700">
					<img src={photo} alt={name} className="h-full w-full  object-cover" />
				</CardHeader>
				<CardBody className="pb-0">
					<Typography className="mb-2 font-cursive text-lg tracking-wider text-gray-100">
						{name}
					</Typography>
				</CardBody>
				<CardFooter className="pt-0">
					<div className="mb-4 items-center justify-between gap-4 text-gray-200 sm:flex">
						<Typography className="text-base font-semibold">
							Price: ${price}
						</Typography>
						<div className="my-2 flex gap-2 font-semibold">
							<Rating style={{ maxWidth: 80 }} value={ratings} readOnly />
							<span>{ratings}</span>
						</div>
					</div>

					{user ? (
						<Link to={`/toy/${_id}`}>
							<Button
								color="lime"
								variant="gradient"
								className="shadow-none"
								fullWidth>
								View Details
							</Button>
						</Link>
					) : (
						<Popover placement="top">
							<PopoverHandler>
								<Button
									color="lime"
									variant="gradient"
									className="shadow-none"
									fullWidth>
									View Details
								</Button>
							</PopoverHandler>
							<PopoverContent className="justify-betwee flex w-96 items-center">
								<Typography variant="h6" color="blue-gray" className="mb-6">
									You have to log in first to view details.
								</Typography>
								<Link to="/login" className="">
									<Button variant="gradient" color="lime">
										Login
									</Button>
								</Link>
							</PopoverContent>
						</Popover>
					)}
				</CardFooter>
			</Card>
		</Tilt>
	);
};

export default ToyCard;
