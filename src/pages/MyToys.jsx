import {
	Button,
	Card,
	Dialog,
	DialogBody,
	DialogFooter,
	Input,
	Option,
	Select,
	Typography,
} from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { AiFillEdit, AiFillDelete, AiOutlineWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import UpdateToyData from '../components/UpdateToyData';

const TABLE_HEAD = [
	'No.',
	'Photo',
	'Name',
	'Description',
	'Category',
	'Rating',
	'Quantity',
	'Price',
	'Actions',
];

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const seller_email = user?.email;

	const [myToys, setMyToys] = useState([]);
	const [toyData, setToyData] = useState();
	const [toyId, setToyId] = useState();

	const [openUpdateModal, setOpenUpdateModal] = useState(false);
	const [openDltModal, setOpenDltModal] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [isAscending, setIsAscending] = useState(true);

	let sort;
	if (isAscending) {
		sort = 1;
	} else {
		sort = -1;
	}

	useEffect(() => {
		fetch(
			`https://the-jedis-trunk-server-side.vercel.app/my-toys?email=${seller_email}&sort=${sort}`
		)
			.then((res) => res.json())
			.then((data) => {
				setMyToys(data);
			});
	}, [seller_email, isSuccessful, sort]);

	const TABLE_ROWS = myToys;

	// handle update
	const handleUpdate = (data) => {
		setOpenUpdateModal((cur) => !cur);
		setToyData(data);
	};
	const handleUpdateConfirm = (id, data) => {
		fetch(`https://the-jedis-trunk-server-side.vercel.app/toy-update/${id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setIsSuccessful(!isSuccessful);
					toast.success(data.message);
				} else {
					toast.error(data.message);
				}
			});

		console.log(data);
		console.log(id);

		setOpenUpdateModal(false);
	};

	// handle delete button
	const handleDelete = (id) => {
		setOpenDltModal((cur) => !cur);
		setToyId(id);
		console.log(id);
	};
	const handleDeleteConfirm = () => {
		fetch(`https://the-jedis-trunk-server-side.vercel.app/toy/${toyId}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					toast.success(data.message);
					setIsSuccessful(!isSuccessful);
				} else {
					toast.error(data.message);
				}
			});
		setOpenDltModal(false);
	};

	const closeUpdateModal = () => setOpenUpdateModal(false);

	return (
		<main className="mx-auto max-w-7xl px-2">
			{/* header */}
			<Card className="my-6 border border-gray-800 bg-black bg-opacity-70 p-2 md:p-10">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<h1 className="my-6 font-cursive text-4xl text-white md:m-0">
						My Toys
					</h1>
					<div className="flex flex-col gap-2 sm:flex-row">
						{/* search */}
						<form
							onSubmit={(e) => {
								e.preventDefault();
								console.log(e.target.search.value);
							}}
							className="w-full sm:w-72">
							<Input
								name="search"
								label="Search"
								color="white"
								icon={<MagnifyingGlassIcon className="h-5 w-5" />}
							/>
						</form>

						{/* sort by price */}
						<div>
							<Select label="Sort" color="blue-gray" className="text-white">
								<Option onClick={() => setIsAscending(true)}>
									Price Low to High
								</Option>
								<Option onClick={() => setIsAscending(false)}>
									Price High to Low
								</Option>{' '}
							</Select>
						</div>
					</div>
				</div>
			</Card>

			<Card className="h-full w-full overflow-auto">
				{/* table */}
				<table className="w-full min-w-max table-auto text-left">
					<thead>
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="border-b-2 border-black bg-lime-500 p-4">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-cursive">
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{TABLE_ROWS.map((toyData, index) => {
							const {
								_id,
								photo,
								name,
								description,
								category,
								ratings,
								quantity,
								price,
							} = toyData;

							const isLast = index === TABLE_ROWS.length - 1;
							const classes = isLast
								? 'p-4 max-w-[200px]'
								: 'p-4 border-b border-gray-500 max-w-[200px]';

							return (
								<tr key={index} className="bg-gray-900 text-gray-100">
									{/* serial no */}
									<td className={classes}>{index + 1}.</td>
									{/* photo */}
									<td className={classes}>
										<img src={photo} alt={name} className="w-24" />
									</td>
									{/* toy name */}
									<td className={classes}>{name}</td>
									{/* description */}
									<td className={classes}>
										<p className="line-clamp-3">{description}</p>
										<Link
											to={`/toy/${_id}`}
											className="text-sm text-gray-400 underline">
											Read More
										</Link>
									</td>
									{/* category */}
									<td className={classes}>{category}</td>
									{/* ratings */}
									<td className={classes}>{ratings}</td>
									{/* quantity */}
									<td className={classes}>{quantity}</td>
									{/* price */}
									<td className={classes}>{price}</td>
									{/* action buttons */}
									<td className={classes}>
										{/* update */}
										<Button
											onClick={() => handleUpdate(toyData)}
											color="white"
											variant="gradient"
											title="Update"
											className="mb-2 flex items-center gap-2 shadow-none"
											fullWidth>
											<AiFillEdit className="text-base" /> Update
										</Button>
										{/* delete */}
										<Button
											onClick={() => handleDelete(_id)}
											color="red"
											title="Delete"
											className="flex items-center gap-2 tracking-wide shadow-none"
											fullWidth>
											<AiFillDelete className="text-base" /> Delete
										</Button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</Card>

			{/* update toy data modal */}
			<Dialog
				open={openUpdateModal}
				handler={handleUpdate}
				className="p-4"
				size="md">
				<UpdateToyData
					toyData={toyData}
					closeUpdateModal={closeUpdateModal}
					handleUpdateConfirm={handleUpdateConfirm}
				/>
			</Dialog>

			{/* delete confirm modal */}
			<Dialog open={openDltModal} handler={handleDelete}>
				<DialogBody className="rounded-t-xl text-center" divider>
					<h2 className="mt-4 font-cursive text-2xl text-black">
						Are you sure you want to delete this item?
					</h2>
					<h6 className="flex-center mt-4 gap-2 text-base font-semibold text-red-900">
						<AiOutlineWarning className="text-xl" /> This action cannot be
						undone!
					</h6>
				</DialogBody>
				<DialogFooter>
					<Button
						onClick={() => setOpenDltModal(false)}
						variant="text"
						color="red"
						className="mr-1">
						<span>Cancel</span>
					</Button>
					<Button onClick={handleDeleteConfirm} variant="gradient" color="lime">
						<span>Delete</span>
					</Button>
				</DialogFooter>
			</Dialog>
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

export default MyToys;
