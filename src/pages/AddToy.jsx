import {
	Button,
	Input,
	Option,
	Select,
	Textarea,
	Typography,
} from '@material-tailwind/react';
import { useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const AddToy = () => {
	const { user } = useContext(AuthContext);

	const handleAddToy = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const description = form.desc.value;
		const price = form.price.value;
		const category = form.category.innerText;
		const ratings = form.ratings.value;
		const quantity = form.quantity.value;
		const photo = form.photo.value;
		const seller = form.seller.value;
		const seller_email = form.email.value;

		const newToyData = {
			name,
			description,
			price,
			category,
			ratings,
			quantity,
			photo,
			seller,
			seller_email,
		};
		console.log(newToyData);

		fetch('https://the-jedis-trunk-server-side.vercel.app/toy/add', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newToyData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.success) {
					toast.success(data.message);
					form.reset();
				} else {
					toast.error(data.message);
				}
			});
	};

	return (
		<main>
			<section className="mx-auto max-w-7xl rounded-xl border border-gray-700 bg-black bg-opacity-60 px-2">
				<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
						<div className="lg:col-span-2 lg:py-12">
							<img src="/assets/error.png" alt="" />
						</div>

						<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
							<Typography
								variant="h4"
								color="black"
								className="text-center font-cursive font-normal">
								Add A New Toy
							</Typography>

							<form onSubmit={handleAddToy} className="mt-6 space-y-8">
								<div className="space-y-4">
									{/* name */}
									<Input
										name="name"
										label="Toy Name"
										type="text"
										color="blue-gray"
										variant="outlined"
										required
									/>
									{/* description */}
									<Textarea
										name="desc"
										label="Description"
										color="blue-gray"
										variant="outlined"
										required
									/>

									<div className="flex flex-col items-center gap-4 sm:flex-row">
										{/* price */}
										<Input
											name="price"
											label="Price"
											type="text"
											color="blue-gray"
											variant="outlined"
											required
										/>
										{/* category */}
										<Select
											name="category"
											label="Select Category"
											required
											color="blue-gray"
											variant="outlined"
											animate={{
												mount: { y: 0 },
												unmount: { y: 25 },
											}}>
											<Option>Action Figures</Option>
											<Option>LEGO Sets</Option>
											<Option>Lightsabers and Blasters</Option>
										</Select>
									</div>

									<div className="flex flex-col items-center gap-4 sm:flex-row">
										{/* ratings */}
										<Input
											name="ratings"
											label="Ratings"
											type="text"
											color="blue-gray"
											variant="outlined"
											required
										/>
										{/* quantity */}
										<Input
											name="quantity"
											label="Quantity"
											type="number"
											color="blue-gray"
											variant="outlined"
											required
										/>
									</div>
									{/* photo */}
									<Input
										name="photo"
										label="Photo URL"
										type="text"
										color="blue-gray"
										variant="outlined"
										required
									/>

									<div className="flex flex-col items-center gap-4 sm:flex-row">
										{/* seller */}
										<Input
											name="seller"
											label="Seller Name"
											defaultValue={user && user?.displayName}
											type="text"
											color="blue-gray"
											variant="outlined"
											required
										/>
										{/* seller email */}
										<Input
											name="email"
											label="Seller Email"
											defaultValue={user && user?.email}
											type="email"
											color="blue-gray"
											variant="outlined"
											required
										/>
									</div>
								</div>

								<div className="flex items-center gap-4">
									{/* reset */}
									<Button
										type="reset"
										className="bg-gray-100 text-black shadow"
										fullWidth>
										Reset
									</Button>
									{/* submit button */}
									<Button
										type="submit"
										color="lime"
										variant="gradient"
										fullWidth>
										Add
									</Button>
									{/* toast */}
									<Toaster
										position="top-center"
										toastOptions={{
											duration: 3000,
											style: {
												border: '1px solid #32CD32',
												padding: '16px',
												color: '#32CD32',
											},
											iconTheme: {
												primary: '#32CD32',
												secondary: '#FFFAEE',
											},
										}}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default AddToy;
