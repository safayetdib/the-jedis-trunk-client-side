import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import droid from '/assets/error.png';
import { Button } from '@material-tailwind/react';
import { RiAlarmWarningFill } from 'react-icons/ri';

const ErrorPage = () => {
	const { error, status } = useRouteError();

	return (
		<section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-4 text-center font-primary text-gray-800">
			<img src={droid} alt="" className="h-80" />
			<h2 className="font-secondary text-5xl font-extrabold">
				<span className="sr-only">Error</span> Error: {status || 404}
			</h2>
			<p className="font-secondary text-2xl font-extrabold  md:text-3xl">
				{error?.message}
			</p>
			<p className="flex gap-2">
				<RiAlarmWarningFill className="text-xl" /> It seems like the force is
				not with us right now. Our apologies for the inconvenience.
			</p>

			<Link to="/">
				<Button
					color="lime"
					variant="gradient"
					size="lg"
					className="font-primary tracking-widest">
					Back to Homepage
				</Button>
			</Link>
		</section>
	);
};

export default ErrorPage;
