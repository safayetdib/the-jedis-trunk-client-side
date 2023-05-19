import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
	Button,
} from '@material-tailwind/react';

const Login = () => {
	return (
		<main className="flex-center mx-auto min-h-[80vh] max-w-7xl px-2">
			<Card className="w-96">
				<CardHeader
					variant="gradient"
					color="lime"
					className="mb-4 grid h-28 place-items-center">
					<Typography variant="h3" className="font-cursive text-black">
						Sign In
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					<Input label="Email" size="lg" />
					<Input label="Password" size="lg" />
					<div className="-ml-2.5">
						<Checkbox label="Remember Me" />
					</div>
				</CardBody>
				<CardFooter className="pt-0">
					<Button variant="gradient" fullWidth>
						Sign In
					</Button>
					<Typography variant="small" className="mt-6 flex justify-center">
						Don't have an account?
						<Typography
							as="a"
							href="#signup"
							variant="small"
							color="blue"
							className="ml-1 font-bold">
							Sign up
						</Typography>
					</Typography>
				</CardFooter>
			</Card>
		</main>
	);
};

export default Login;
