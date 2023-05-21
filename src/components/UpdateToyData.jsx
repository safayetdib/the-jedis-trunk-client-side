import { Button, Input, Textarea } from '@material-tailwind/react';
import { Toaster } from 'react-hot-toast';

const UpdateToyData = ({ toyData, closeUpdateModal, handleUpdateConfirm }) => {
	const { _id, name, description, quantity, price } = toyData;

	const handleUpdateToy = (e) => {
		e.preventDefault();
		const form = e.target;

		const price = form.price.value;
		const quantity = form.quantity.value;
		const description = form.desc.value;

		const updatedData = {
			description,
			price,
			quantity,
		};

		handleUpdateConfirm(_id, updatedData);
	};

	return (
		<form onSubmit={handleUpdateToy} className="mt-6 space-y-8">
			<h2 className="text-center font-cursive text-xl text-black">
				Update Toy Data
			</h2>
			<div className="space-y-4">
				{/* name */}
				<Input
					type="text"
					name="name"
					label="Toy Name"
					defaultValue={name}
					color="blue-gray"
					variant="outlined"
					disabled
				/>

				{/* description */}
				<Textarea
					name="desc"
					label="Description"
					defaultValue={description}
					color="blue-gray"
					variant="outlined"
					required
				/>

				<div className="flex flex-col items-center gap-4 sm:flex-row">
					{/* price */}
					<Input
						type="text"
						name="price"
						label="Price"
						defaultValue={price}
						color="blue-gray"
						variant="outlined"
						required
					/>
					{/* quantity */}
					<Input
						type="number"
						name="quantity"
						label="Quantity"
						defaultValue={quantity}
						color="blue-gray"
						variant="outlined"
						required
					/>
				</div>
			</div>

			<div className="flex items-center gap-4">
				{/* cancel */}
				<Button
					onClick={closeUpdateModal}
					type="button"
					variant="gradient"
					color="white"
					fullWidth>
					Cancel
				</Button>
				{/* submit button */}
				<Button type="submit" color="lime" variant="gradient" fullWidth>
					Update
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
	);
};

export default UpdateToyData;
