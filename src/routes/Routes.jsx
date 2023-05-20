import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import ToyDetails from '../pages/ToyDetails';
import AllToys from '../pages/AllToys';
import MyToys from '../pages/MyToys';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddToy from '../pages/AddToy';
import PrivateRoute from './PrivateRoute';

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
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/toys',
				element: <AllToys />,
				loader: () => fetch(`http://localhost:5000/toys`),
			},
			{
				path: '/toy/:id',
				element: (
					<PrivateRoute>
						<ToyDetails />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
			},
			{
				path: '/my-toys',
				element: (
					<PrivateRoute>
						<MyToys />
					</PrivateRoute>
				),
			},
			{
				path: '/add-toy',
				element: (
					<PrivateRoute>
						<AddToy />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
