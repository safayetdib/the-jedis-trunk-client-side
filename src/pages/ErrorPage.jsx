import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import darth from '/assets/error.png';
import { Button } from '@material-tailwind/react';
import { RiAlarmWarningFill } from 'react-icons/ri';

const ErrorPage = () => {
	const { error, status } = useRouteError();

	return (
		<section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black bg-opacity-60 p-4 text-center text-white">
			<img src={darth} alt="" className="max-w-sm object-cover" />
			<h2 className="font-cursive text-5xl font-extrabold">
				<span className="sr-only">Error</span> Error: {status || 404}
			</h2>
			<p className="font-cursive text-2xl font-extrabold  md:text-3xl">
				{error?.message}
			</p>
			<p className="flex gap-2">
				<RiAlarmWarningFill className="hidden text-xl sm:inline-block" /> It
				seems like the force is not with us right now. Our apologies for the
				inconvenience.
			</p>

			<Link to="/">
				<Button
					color="lime"
					variant="gradient"
					size="lg"
					className="tracking-widest">
					Back to Homepage
				</Button>
			</Link>
		</section>
	);
};

export default ErrorPage;
