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
		fetch(`http://localhost:5000/categories`)
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	// get toys data by category name
	useEffect(() => {
		fetch(`http://localhost:5000/toys/category/${selectedCategory}`)
			.then((res) => res.json())
			.then((data) => setToysData(data));
	}, [selectedCategory]);

	const handleCategory = (name) => {
		setSelectedCategory(name);
	};

	return (
		<section className="mx-auto max-w-7xl px-4">
			<Typography variant="h3" color="blue-gray" className="my-10 text-center">
				Shop By Category
			</Typography>

			<Tabs>
				<TabList>
					{categories.map(({ _id, name }) => (
						<Tab key={_id} onClick={() => handleCategory(name)}>
							{name}
						</Tab>
					))}
				</TabList>

				{categories.map(({ _id }) => (
					<TabPanel key={_id}>
						<div className="grid grid-cols-1 justify-items-center gap-4 py-2 md:grid-cols-2 lg:grid-cols-3">
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
