import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import ToyDetails from '../pages/ToyDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/toy/:id',
				element: <ToyDetails />,
				loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
			},
		],
	},
]);

export default router;
