import {
	Button,
	Card,
	Input,
	Option,
	Select,
	Typography,
} from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AllToys = () => {
	const TABLE_HEAD = [
		'No.',
		'Photo',
		'Name',
		'Category',
		'Price',
		'Quantity',
		'Seller',
		'',
	];
	// const TABLE_ROWS = useLoaderData();

	const [allData, setAllData] = useState([]);
	const [isAscending, setIsAscending] = useState(true);

	const TABLE_ROWS = allData;

	let sort;
	if (isAscending) {
		sort = 1;
	} else {
		sort = -1;
	}

	useEffect(() => {
		fetch(`https://the-jedis-trunk-server-side.vercel.app/toys?sort=${sort}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllData(data);
			});
	}, [sort]);

	return (
		<main className="mx-auto max-w-7xl px-2">
			<Card className="my-6 border border-gray-800 bg-black bg-opacity-70 p-2 md:p-10">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<h1 className="my-4 font-cursive text-4xl text-white md:m-0">
						All Toys
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

			<Card className="mt-2 h-full w-full overflow-auto">
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
						{TABLE_ROWS.map(
							(
								{
									_id,
									photo,
									name,
									price,
									seller,
									seller_email,
									category,
									quantity,
								},
								index
							) => {
								const isLast = index === TABLE_ROWS.length - 1;
								const classes = isLast
									? 'p-4 max-w-[200px]'
									: 'p-4 border-b border-gray-500 max-w-[200px]';

								return (
									<tr key={index} className="bg-white text-black">
										<td className={classes}>{index + 1}.</td>
										<td className={classes}>
											<img src={photo} alt={name} className="w-24" />
										</td>
										<td className={classes}>{name}</td>
										<td className={classes}>{category}</td>
										<td className={classes}>{price}</td>
										<td className={classes}>{quantity}</td>
										<td className={classes}>
											<p>{seller && seller}</p>
											<p>{seller_email}</p>
										</td>
										<td className={classes}>
											<Link to={`/toy/${_id}`}>
												<Button color="lime" variant="gradient">
													View Details
												</Button>
											</Link>
										</td>
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</Card>
		</main>
	);
};

export default AllToys;
