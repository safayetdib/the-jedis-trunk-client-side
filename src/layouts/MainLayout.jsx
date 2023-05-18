import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';

const MainLayout = () => {
	return (
		<div>
			<Header />
			<div className="min-h-screen">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
