import React, { useState } from 'react';
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
import { Link, NavLink } from 'react-router-dom';
import { FaJedi } from 'react-icons/fa';
import {
	AiOutlineAccountBook,
	AiOutlineBug,
	AiOutlineEdit,
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

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	React.useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setIsNavOpen(false)
		);
	}, []);

	return (
		<header className="p-2">
			<Navbar
				color="lime"
				variant="gradient"
				className="mx-auto max-w-7xl p-2 lg:rounded-full lg:pl-6">
				<div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
					{/* LOGO */}
					<Link to="/">
						<Typography className="ml-2 mr-4 flex cursor-pointer items-center gap-2 py-1.5 font-cursive text-gray-900 hover:text-gray-800">
							<FaJedi className="text-3xl sm:text-5xl" />
							<span className="flex flex-col">
								<span className="text-xs sm:text-xl">
									The Jedi&apos;s Trunk
								</span>
								<span className="hidden text-xs sm:inline-block">
									The ultimate destination for Star Wars toy collectors
								</span>
							</span>
						</Typography>
					</Link>

					<div className="flex items-center gap-4 pr-4">
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

								{/* LOGIN */}
								<NavMenuLink path="/login">
									<AiOutlineLogin /> Login
								</NavMenuLink>

								{/* REGISTER */}
								<NavMenuLink path="/register">
									<MdOutlineAppRegistration /> Register
								</NavMenuLink>
							</ul>
						</div>

						{/* Small Device : Menu Toggle Button */}
						<IconButton
							size="sm"
							color="blue-gray"
							variant="text"
							onClick={toggleIsNavOpen}
							className="ml-auto text-2xl text-black lg:hidden">
							{isNavOpen ? <HiXMark /> : <HiBars3 />}
						</IconButton>

						{/* Logged In User Menu */}
						<Menu
							open={isMenuOpen}
							handler={setIsMenuOpen}
							placement="bottom-end">
							<MenuHandler>
								<Button
									variant="text"
									color="blue-gray"
									className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-auto">
									<Avatar
										variant="circular"
										size="sm"
										alt="candice wu"
										className="border border-blue-500 p-0.5"
										src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
									/>
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`h-3 w-3 transition-transform ${
											isMenuOpen ? 'rotate-180' : ''
										}`}
									/>
								</Button>
							</MenuHandler>
							<MenuList className="p-1">
								{/* USER */}
								<NavMenuLink path="/toys">
									<AiOutlineUser /> Profile
								</NavMenuLink>

								{/* MY TOYS */}
								<NavMenuLink path="/toys">
									<AiOutlineBug /> My Toys
								</NavMenuLink>

								{/* ADD TOYS */}
								<NavMenuLink path="/blogs">
									<AiOutlinePlusCircle /> Add Toy
								</NavMenuLink>

								{/* SIGN OUT */}
								<MenuItem
									onClick={closeMenu}
									className="rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
									<Typography
										as="span"
										variant="small"
										className="flex items-center gap-2 font-medium"
										color="red">
										<AiOutlinePoweroff /> Sign Out
									</Typography>
								</MenuItem>
							</MenuList>
						</Menu>
					</div>
				</div>

				{/* Small Device : Nav Menu */}
				<Collapse open={isNavOpen}>
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

						{/* LOGIN */}
						<NavMenuLink path="/login">
							<AiOutlineLogin /> Login
						</NavMenuLink>

						{/* REGISTER */}
						<NavMenuLink path="/register">
							<MdOutlineAppRegistration /> Register
						</NavMenuLink>
					</ul>
				</Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
