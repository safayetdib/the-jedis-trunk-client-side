import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex min-h-screen w-full items-center justify-center">
				<Spinner color="lime" className="h-12 w-12" />
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
