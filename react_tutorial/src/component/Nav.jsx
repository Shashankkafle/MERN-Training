import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ loggedIn, setLoggedIn }) => {
	const navigate = useNavigate();
	function handleLogout() {
		setLoggedIn(false);
		navigate('/login');
	}
	return (
		<nav className="bg-gray-800 p-4 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex space-x-4">
					<li className="list-none">
						<Link
							to="/current"
							className="text-white hover:text-blue-300 font-semibold text-lg"
						>
							Current
						</Link>
					</li>
					<li className="list-none">
						<Link
							to="/forecast"
							className="text-white hover:text-blue-300 font-semibold text-lg"
						>
							Forecast
						</Link>
					</li>
				</div>
				<div>
					<li className="list-none">
						{loggedIn ? (
							<button
								onClick={handleLogout}
								className="text-white hover:text-blue-300 font-semibold text-lg"
							>
								Logout
							</button>
						) : (
							<Link
								to="/login"
								className="text-white hover:text-blue-300 font-semibold text-lg"
							>
								Login
							</Link>
						)}
					</li>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
