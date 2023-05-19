import { Button, Card, Typography } from '@material-tailwind/react';
import { Link, useLoaderData } from 'react-router-dom';

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
	const TABLE_ROWS = useLoaderData();

	return (
		<main className="mx-auto max-w-7xl px-2">
			<h1 className="my-10 text-center font-cursive text-4xl text-white">
				All Toys
			</h1>

			<Card className="mb-20 h-full w-full overflow-auto">
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