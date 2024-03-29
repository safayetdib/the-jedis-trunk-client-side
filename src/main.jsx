import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import AuthProvider from './context/AuthProvider';
import { ParallaxProvider } from 'react-scroll-parallax';

const customTheme = {
	dialog: {
		styles: {
			sizes: {
				md: {
					width: 'w-full sm:max-w-xl',
					minWidth: 'min-w-[30%]',
					maxWidth: 'max-w-[90%]',
				},
			},
		},
	},
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider value={customTheme}>
			<AuthProvider>
				<ParallaxProvider>
					<RouterProvider router={router} />
				</ParallaxProvider>
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
);
