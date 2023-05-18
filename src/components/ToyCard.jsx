import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
	const { _id, photo, name, price, ratings } = toy;

	return (
		<Card
			variant="gradient"
			color="white"
			className="mt-12 flex w-full flex-col justify-between border">
			<CardHeader color="blue-gray" className="relative h-48 bg-black">
				<img src={photo} alt={name} className=" object-cover" />
			</CardHeader>
			<CardBody className="pb-0">
				<Typography
					color="blue-gray"
					className="mb-2 font-cursive text-lg tracking-wider">
					{name}
				</Typography>
			</CardBody>
			<CardFooter className="pt-0">
				<div className="mb-4 items-center justify-between gap-4 sm:flex">
					<Typography className="text-base font-semibold">
						Price: ${price}
					</Typography>
					<div className="my-2 flex gap-2 font-semibold">
						<Rating style={{ maxWidth: 80 }} value={ratings} readOnly />
						<span>{ratings}</span>
					</div>
				</div>
				<Link to={`/toy/${_id}`}>
					<Button variant="gradient" color="lime" size="md" fullWidth>
						View Details
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default ToyCard;
