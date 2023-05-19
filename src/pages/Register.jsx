import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography,
} from '@material-tailwind/react';

const Register = () => {
	return (
		<section className="flex-center mx-auto min-h-[80vh] max-w-7xl px-2">
			<div className="flex-center flex-col bg-white px-4 py-10 lg:w-1/2">
				<Typography variant="h4" color="blue-gray">
					Sign Up
				</Typography>
				<Typography color="gray" className="mt-1 font-normal">
					Enter your details to register.
				</Typography>
				<form className="mb-2 mt-8 w-full max-w-screen-lg sm:w-96">
					<div className="mb-4 flex flex-col gap-6">
						<Input color="blue-gray" size="lg" label="Name" />
						<Input color="blue-gray" size="lg" label="Photo URL" />
						<Input color="blue-gray" size="lg" label="Email" required />
						<Input
							color="blue-gray"
							type="password"
							size="lg"
							label="Password"
							required
						/>
					</div>
					<Checkbox
						color="red"
						label={
							<Typography
								variant="small"
								color="gray"
								className="flex items-center font-normal">
								I agree the
								<a
									href="#"
									className="font-medium transition-colors hover:text-blue-500">
									&nbsp;Terms and Conditions
								</a>
							</Typography>
						}
						containerProps={{ className: '-ml-2.5' }}
					/>
					<Button color="lime" variant="gradient" className="mt-6" fullWidth>
						Register
					</Button>
					<Typography color="gray" className="mt-4 text-center font-normal">
						Already have an account?{' '}
						<a
							href="#"
							className="ml-1 font-medium text-gray-900 transition-colors hover:text-gray-700 hover:underline">
							Sign In
						</a>
					</Typography>
				</form>
			</div>
		</section>
	);
};

export default Register;
