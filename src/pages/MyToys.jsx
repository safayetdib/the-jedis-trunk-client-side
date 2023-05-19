import { Button, Card, Input, Typography } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';

const MyToys = () => {
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
	const TABLE_ROWS = useLoaderData();

	const handleUpdate = () => {};

	// handle delete button
	const handleDelete = () => {};

	return (
		<main className="mx-auto max-w-7xl px-2">
			{/* header */}
			<Card className="my-6 border border-gray-800 bg-black bg-opacity-70 p-2 md:p-10">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<h1 className="my-6 font-cursive text-4xl text-white md:m-0">
						My Toys
					</h1>
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
				</div>
			</Card>

			{/* table */}
			<Card className="h-full w-full overflow-auto">
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
									description,
									category,
									ratings,
									quantity,
									price,
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
										<td className={classes}>
											<p className="line-clamp-3">{description}</p>
											<Link
												to={`/toy/${_id}`}
												className="text-sm text-gray-900 underline">
												Read More
											</Link>
										</td>
										<td className={classes}>{category}</td>
										<td className={classes}>{ratings}</td>
										<td className={classes}>{quantity}</td>
										<td className={classes}>{price}</td>
										{/* action buttons */}
										<td className={classes}>
											{/* update */}
											<Button
												onClick={handleUpdate}
												color="lime"
												variant="gradient"
												title="Update"
												className="mb-2 flex items-center gap-2"
												fullWidth>
												<AiFillEdit className="text-base" /> Update
											</Button>
											{/* delete */}
											<Button
												onClick={handleDelete}
												color="red"
												title="Delete"
												className="flex items-center gap-2 bg-red-900 tracking-wide text-white"
												fullWidth>
												<AiFillDelete className="text-base" /> Delete
											</Button>
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

export default MyToys;
