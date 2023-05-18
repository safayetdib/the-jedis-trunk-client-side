import { MenuItem, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const NavMenuLink = ({ path, children }) => {
	return (
		<NavLink to={path}>
			<Typography variant="small" color="blue-gray" className="font-primary">
				<MenuItem className="flex  gap-2 lg:rounded-full">{children}</MenuItem>
			</Typography>
		</NavLink>
	);
};

export default NavMenuLink;
