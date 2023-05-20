import { Input, Checkbox, Button, Typography } from '@material-tailwind/react';
import {
	AiOutlineWarning,
	AiFillEye,
	AiFillEyeInvisible,
} from 'react-icons/ai';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../components/Loading';

const Register = () => {
	const { createUser, signIn, updateUserData, signInWithGoogle, logout } =
		useContext(AuthContext);

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [showPassword, setShowPassword] = useState(false);
	// ERRORS
	const [error, setError] = useState('');
	const [passError, setPassError] = useState('');

	// HANDLE REGISTER
	const handleRegister = (e) => {
		e.preventDefault();
		setIsLoading(true);

		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		setError('');
		setPassError('');

		if (password && password.length < 6) {
			setIsLoading(false);
			setPassError('Password must be 6 (six) characters long');
			return;
		}

		createUser(email, password)
			.then(() => {
				updateNameAndPhoto(name, photo);
				logout();
				signIn(email, password);

				form.reset();
				setError('');
				setIsLoading(false);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(() => {
				setError('');
				navigate(from, { replace: true });
			})
			.catch((err) => setError(err.message));
	};

	const updateNameAndPhoto = (name, url) => {
		updateUserData(name, url).then(() => {
			navigate('/');
		});
	};

	return (
		<section className="flex-center mx-auto min-h-[80vh] max-w-7xl px-2">
			<div className="flex-center w-full flex-col rounded-xl bg-white px-4 py-10 sm:max-w-lg lg:w-1/2">
				<Typography
					variant="h4"
					color="blue-gray"
					className="font-cursive tracking-wider">
					Sign Up
				</Typography>
				<Typography color="gray" className="mt-1 font-normal">
					Enter your details to register.
				</Typography>
				<form
					onSubmit={handleRegister}
					className="mb-2 mt-8 w-full max-w-screen-lg sm:w-96">
					<div className="mb-4 flex flex-col gap-6">
						<Input name="name" color="blue-gray" size="lg" label="Name" />
						<Input name="photo" color="blue-gray" size="lg" label="Photo URL" />
						<Input
							name="email"
							color="blue-gray"
							size="lg"
							label="Email"
							required
						/>
						<Input
							name="password"
							color="blue-gray"
							type="password"
							size="lg"
							label="Password"
							required
						/>
						{/* PASSWORD ERROR MESSAGE */}
						{passError && (
							<p className="text-red-accent flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 p-2 text-center">
								<AiOutlineWarning className="text-lg" /> {passError}
							</p>
						)}
					</div>
					<Checkbox
						required
						color="red"
						label={
							<Typography
								variant="small"
								color="gray"
								className="flex flex-wrap items-center font-normal">
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

					{/* ERROR MESSAGE */}
					{error && (
						<p className="text-red-accent flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 p-2 text-center">
							<AiOutlineWarning className="text-lg" /> {error}
						</p>
					)}

					<Button
						type="submit"
						color="lime"
						variant="gradient"
						className="mt-6"
						fullWidth>
						{!isLoading ? 'Submit' : <Loading />}
					</Button>

					<div className="relative mt-6">
						<span className="block h-px w-full bg-gray-300"></span>
						<p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-white px-4 text-sm text-gray-600">
							Or
						</p>
					</div>

					{/* google */}
					<Button
						onClick={handleGoogleSignIn}
						variant="gradient"
						color="white"
						className="mt-6 flex items-center justify-center gap-x-3"
						fullWidth>
						<svg
							className="h-5 w-5"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_17_40)">
								<path
									d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
									fill="#4285F4"
								/>
								<path
									d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
									fill="#34A853"
								/>
								<path
									d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
									fill="#FBBC04"
								/>
								<path
									d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
									fill="#EA4335"
								/>
							</g>
							<defs>
								<clipPath id="clip0_17_40">
									<rect width="48" height="48" fill="white" />
								</clipPath>
							</defs>
						</svg>
						Continue with Google
					</Button>

					<Typography color="gray" className="mt-4 text-center font-normal">
						Already have an account?{' '}
						<Link
							to="/login"
							className="ml-2 font-semibold text-black hover:underline">
							Sign In
						</Link>
					</Typography>
				</form>
			</div>
		</section>
	);
};

export default Register;
