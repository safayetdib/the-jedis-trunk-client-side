import React, { useContext, useState } from 'react';
import {
	Navbar,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
	IconButton,
	Collapse,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FaJedi } from 'react-icons/fa';
import {
	AiOutlineAccountBook,
	AiOutlineBug,
	AiOutlineHome,
	AiOutlineLogin,
	AiOutlinePlusCircle,
	AiOutlinePoweroff,
	AiOutlineUser,
} from 'react-icons/ai';
import { MdOutlineAppRegistration, MdOutlineSmartToy } from 'react-icons/md';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import NavMenuLink from '../../components/NavMenuLink';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '../../context/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(!isMenuOpen);

	React.useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setIsNavOpen(false)
		);
	}, []);

	const { user, logout } = useContext(AuthContext);

	const handleSignOut = () => {
		logout().then(() => {
			toast.success(`You've logged out successfully`);
		});
		closeMenu();
	};

	return (
		<header className="my-4 px-2" data-aos="fade-down">
			<Navbar
				variant="gradient"
				className="mx-auto max-w-7xl border-0 bg-gray-900 p-2 lg:rounded-full lg:pl-6">
				<div className="relative mx-auto flex items-center justify-between text-gray-50">
					{/* LOGO */}
					<Link to="/">
						<Typography className="ml-2 mr-4 flex cursor-pointer items-center gap-2 py-1.5 font-cursive">
							<FaJedi className="text-3xl text-lime-500 sm:text-5xl" />
							<span className="flex flex-col">
								<span className="text-xs text-gray-200 sm:text-xl">
									The Jedi&apos;s Trunk
								</span>
								<span className="hidden text-xs text-gray-400 sm:inline-block">
									The ultimate destination for Star Wars toy collectors
								</span>
							</span>
						</Typography>
					</Link>

					<div className="flex items-center gap-2 pr-4 sm:gap-4">
						<div className="hidden lg:block">
							<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
								{/* HOME */}
								<NavMenuLink path="/">
									<AiOutlineHome /> Home
								</NavMenuLink>

								{/* ALL TOYS */}
								<NavMenuLink path="/toys">
									<MdOutlineSmartToy /> All Toys
								</NavMenuLink>

								{/* BLOGS */}
								<NavMenuLink path="/blogs">
									<AiOutlineAccountBook /> Blogs
								</NavMenuLink>

								{user ? (
									<>
										{/* MY TOYS */}
										<NavMenuLink path="/my-toys">
											<AiOutlineBug /> My Toys
										</NavMenuLink>

										{/* ADD TOYS */}
										<NavMenuLink path="/add-toy">
											<AiOutlinePlusCircle /> Add Toy
										</NavMenuLink>
									</>
								) : (
									<>
										{/* LOGIN */}
										<NavMenuLink path="/login">
											<AiOutlineLogin /> Login
										</NavMenuLink>

										{/* REGISTER */}
										<NavMenuLink path="/register">
											<MdOutlineAppRegistration /> Register
										</NavMenuLink>
									</>
								)}
							</ul>
						</div>

						{/* Logged In User Menu */}
						{user && (
							<Menu
								open={isMenuOpen}
								handler={setIsMenuOpen}
								placement="bottom-end">
								<MenuHandler>
									<div className="group relative flex justify-center">
										<Button
											variant="text"
											color="blue-gray"
											className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-auto">
											<Avatar
												variant="circular"
												size="sm"
												alt={user && user?.displayName}
												className="border border-blue-500 p-0.5"
												src={
													(user && user.photoURL) ||
													'https://cdn.pixabay.com/photo/2016/05/12/00/48/star-wars-1386790_960_720.png'
												}
											/>
											<ChevronDownIcon
												strokeWidth={2.5}
												className={`h-3 w-3 transition-transform ${
													isMenuOpen ? 'rotate-180' : ''
												}`}
											/>
										</Button>
										{user && user.displayName && (
											<span className="absolute right-16 top-1 w-40 scale-0 rounded bg-gray-800 bg-opacity-90 p-2 text-center text-xs font-medium text-white shadow-lg transition-all group-hover:scale-100">
												{user.displayName}
											</span>
										)}
									</div>
								</MenuHandler>
								<MenuList className="overflow-hidden bg-black p-1 text-gray-200">
									{/* USER */}
									<Link to="/" className="outline-none">
										<MenuItem className="rounded">
											<Typography
												as="span"
												variant="small"
												className="flex items-center gap-2 font-medium">
												<AiOutlineUser /> Profile
											</Typography>
										</MenuItem>
									</Link>

									{/* SIGN OUT */}
									<MenuItem onClick={handleSignOut}>
										<Typography
											as="span"
											variant="small"
											className="flex items-center gap-2 font-medium text-red-500">
											<AiOutlinePoweroff /> Sign Out
										</Typography>
									</MenuItem>
								</MenuList>
								<Toaster />
							</Menu>
						)}

						{/* Small Device : Menu Toggle Button */}
						<IconButton
							size="sm"
							color="blue-gray"
							variant="text"
							onClick={toggleIsNavOpen}
							className="bg-blue-gray-900 text-2xl text-gray-200 lg:hidden">
							{isNavOpen ? <HiXMark /> : <HiBars3 />}
						</IconButton>
					</div>
				</div>

				{/* Small Device : Nav Menu */}
				<Collapse open={isNavOpen}>
					<ul className="mb-4 mt-2 flex flex-col gap-2 text-gray-200 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
						{/* HOME */}
						<NavMenuLink path="/">
							<AiOutlineHome /> Home
						</NavMenuLink>

						{/* ALL TOYS */}
						<NavMenuLink path="/toys">
							<MdOutlineSmartToy /> All Toys
						</NavMenuLink>

						{/* BLOGS */}
						<NavMenuLink path="/blogs">
							<AiOutlineAccountBook /> Blogs
						</NavMenuLink>

						{user ? (
							<>
								{/* MY TOYS */}
								<NavMenuLink path="/my-toys">
									<AiOutlineBug /> My Toys
								</NavMenuLink>

								{/* ADD TOYS */}
								<NavMenuLink path="/add-toy">
									<AiOutlinePlusCircle /> Add Toys
								</NavMenuLink>
							</>
						) : (
							<>
								{/* LOGIN */}
								<NavMenuLink path="/login">
									<AiOutlineLogin /> Login
								</NavMenuLink>

								{/* REGISTER */}
								<NavMenuLink path="/register">
									<MdOutlineAppRegistration /> Register
								</NavMenuLink>
							</>
						)}
					</ul>
				</Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
