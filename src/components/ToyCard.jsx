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
			className="flex w-full flex-col justify-between bg-gray-900">
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
				<Link to={`/toy/${_id}`}>
					<Button
						color="lime"
						variant="gradient"
						className="shadow-none"
						fullWidth>
						View Details
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default ToyCard;
