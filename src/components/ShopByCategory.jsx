import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';
import { Typography } from '@material-tailwind/react';

const ShopByCategory = () => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('Action Figures');
	const [toysData, setToysData] = useState([]);

	// get category names
	useEffect(() => {
		fetch(`https://the-jedis-trunk-server-side.vercel.app/categories`)
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	// get toys data by category name
	useEffect(() => {
		fetch(
			`https://the-jedis-trunk-server-side.vercel.app/toys/category/${selectedCategory}`
		)
			.then((res) => res.json())
			.then((data) => setToysData(data));
	}, [selectedCategory]);

	const handleCategory = (name) => {
		setSelectedCategory(name);
	};

	return (
		<section className="mx-auto max-w-7xl px-4">
			<div className="mb-4 mt-10 bg-black bg-opacity-70 py-4">
				<Typography variant="h3" color="white" className="text-center">
					Shop By Category
				</Typography>
			</div>

			<Tabs selectedTabClassName="bg-black text-white border-4 border-gray-700">
				<TabList className="flex-center flex-col gap-2 rounded-xl bg-lime-500 p-2 text-center font-cursive text-xs text-black transition sm:flex-row sm:text-sm">
					{categories.map(({ _id, name }) => (
						<Tab
							className="w-full cursor-pointer rounded-xl border-2 border-gray-700 px-4 py-1 outline-none hover:bg-black hover:text-white sm:w-fit"
							key={_id}
							onClick={() => handleCategory(name)}>
							{name}
						</Tab>
					))}
				</TabList>

				{categories.map(({ _id }) => (
					<TabPanel key={_id}>
						<div className="mt-4 grid grid-cols-1 justify-items-center gap-4 py-2 md:grid-cols-2 lg:grid-cols-3">
							{toysData.map((toy) => (
								<ToyCard key={toy._id} toy={toy} />
							))}
						</div>
					</TabPanel>
				))}
			</Tabs>
		</section>
	);
};

export default ShopByCategory;
