import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const ShopByCategory = () => {
	const [toysData, setToysData] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch(`https://the-jedis-trunk-server-side.vercel.app/toys`)
			.then((res) => res.json())
			.then((data) => {
				setToysData(data);
				setCategories(
					Array.from(new Set(data.map(({ category }) => category)))
				);
			});
	}, []);

	console.log(categories);

	return (
		<section className="mx-auto max-w-7xl px-4">
			<Tabs id="custom-animation" value="1">
				<TabsHeader>
					{categories.map((category, idx) => (
						<Tab key={idx} value={category}>
							{category}
						</Tab>
					))}
				</TabsHeader>
				<TabsBody
					animate={{
						initial: { y: 250 },
						mount: { y: 0 },
						unmount: { y: 250 },
					}}>
					{categories.map((category, idx) => (
						<TabPanel key={idx} value={category}>
							{toysData.map((toy, idx) => (
								<ToyCard key={idx} toy={toy} />
							))}
						</TabPanel>
					))}
				</TabsBody>
			</Tabs>
		</section>
	);
};

export default ShopByCategory;
