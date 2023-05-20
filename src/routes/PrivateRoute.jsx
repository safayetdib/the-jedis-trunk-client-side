import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex min-h-screen w-full items-center justify-center bg-red-100">
				<div className="relative rounded-xl border border-red-300 bg-red-100 p-10 shadow-lg ">
					<svg
						className="text-red-accent h-12 w-12 animate-spin"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 4.75V6.25"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M17.1266 6.87347L16.0659 7.93413"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M19.25 12L17.75 12"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M17.1266 17.1265L16.0659 16.0659"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M12 17.75V19.25"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M7.9342 16.0659L6.87354 17.1265"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M6.25 12L4.75 12"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
						<path
							d="M7.9342 7.93413L6.87354 6.87347"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
					</svg>
				</div>
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
