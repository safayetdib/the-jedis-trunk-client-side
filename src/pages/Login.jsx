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
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import {
	AiOutlineWarning,
	AiFillEye,
	AiFillEyeInvisible,
} from 'react-icons/ai';
import { Toaster, toast } from 'react-hot-toast';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet';

const Login = () => {
	const { signIn, signInWithGoogle } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then(() => {
				form.reset();
				setIsLoading(false);
				setError('');

				toast.success('Signed In Successfully');
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err.message);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then(() => {
				setError('');
				toast.success('Signed In Successfully');
				navigate(from, { replace: true });
			})
			.catch((err) => setError(err.message));
	};

	return (
		<main className="flex-center mx-auto min-h-[70vh] max-w-7xl px-2">
			<Helmet>
				<meta charSet="utf-8" />
				<title>The Jedi's Trunk | Login</title>
			</Helmet>

			<Card className="mt-16 w-96 bg-gray-900 sm:mt-20">
				<CardHeader
					variant="gradient"
					color="lime"
					className="mb-4 grid h-20 place-items-center shadow-none">
					<Typography variant="h3" className="font-cursive text-black">
						Sign In
					</Typography>
				</CardHeader>
				<form onSubmit={handleLogin}>
					<CardBody className="flex flex-col gap-4">
						<Input
							name="email"
							type="email"
							className="text-gray-100"
							label="Email"
							size="lg"
							required
						/>
						<Input
							name="password"
							type="password"
							className="text-gray-100"
							label="Password"
							size="lg"
							required
						/>
						<div className="-ml-2.5 flex flex-col items-center justify-between sm:flex-row">
							<Checkbox label="Remember Me" className="text-gray-100" />
							<Link to="/" className="text-sm text-gray-200  hover:underline">
								Forgot password?
							</Link>
						</div>
						{/* ERROR MESSAGE */}
						{error && (
							<p className="flex  items-center justify-center gap-2 rounded-lg bg-red-700 p-2 text-center text-gray-100 shadow-2xl">
								<AiOutlineWarning className="text-lg" /> {error}
							</p>
						)}
					</CardBody>
					<CardFooter className="pt-0">
						<div>
							<Button
								type="submit"
								color="lime"
								variant="gradient"
								className="shadow-none"
								fullWidth>
								{!isLoading ? 'Sign In' : <Loading />}
							</Button>
						</div>

						<div className="relative mt-6">
							<span className="block h-px w-full bg-gray-300"></span>
							<p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit bg-gray-900 px-4 text-sm text-gray-200">
								Or
							</p>
						</div>

						{/* google */}
						<Button
							onClick={handleGoogleSignIn}
							variant="gradient"
							color="white"
							className="mt-6 flex items-center justify-center gap-x-3 shadow-none"
							fullWidth>
							<svg
								className="h-5 w-5"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_17_40)">
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

						<Typography
							variant="small"
							className="mt-6 flex justify-center text-gray-200">
							Don&apos;t have an account?
							<Link
								to="/register"
								className="ml-2 font-semibold tracking-widest text-white hover:underline">
								Sign Up
							</Link>
						</Typography>
					</CardFooter>
				</form>
			</Card>

			{/* toast */}
			<Toaster
				position="top-center"
				toastOptions={{
					duration: 4000,
				}}
			/>
		</main>
	);
};

export default Login;
