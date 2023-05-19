import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import ToyDetails from '../pages/ToyDetails';
import AllToys from '../pages/AllToys';
import MyToys from '../pages/MyToys';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
				path: '/toys',
				element: <AllToys />,
				loader: () => fetch(`http://localhost:5000/toys`),
			},
			{
				path: '/toy/:id',
				element: <ToyDetails />,
				loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
			},
			{
				path: '/toys/:seller',
				element: <MyToys />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/toys/${params.seller}`),
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

export default router;
