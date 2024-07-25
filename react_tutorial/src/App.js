import { useState } from 'react';
import Current from './pages/Current';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './component/Nav';
import Login from './pages/Login';
import Forecast from './pages/Forecast';
import ProtectedRoute from './component/ProtectedRoute';
import ParamsPage from './pages/ParamsPage';
function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const router = createBrowserRouter([
		{
			path: '/forecast',
			element: (
				<>
					<ProtectedRoute loggedIn={loggedIn}>
						<Nav
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
						></Nav>
						<Forecast />
					</ProtectedRoute>
				</>
			),
		},
		{
			path: '/',
			element: (
				<>
					<Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Nav>
					<Current />
				</>
			),
		},
		{
			path: '/current',
			element: (
				<>
					<Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Nav>
					<Current />
				</>
			),
		},
		{
			path: '/current/:city',
			element: (
				<>
					<Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Nav>
					<ParamsPage />
				</>
			),
		},
		{
			path: '/login',
			element: (
				<>
					<Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Nav>
					<Login setLoggedin={setLoggedIn} />
				</>
			),
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
