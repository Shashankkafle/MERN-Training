import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedin }) => {
	const navigate = useNavigate();
	async function handleLogin(e) {
		e.preventDefault();
		setLoggedin(true);
		navigate('/');
	}
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<h1 className="text-3xl font-bold mb-8">Login</h1>
				<form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
					<div className="mb-4">
						<input
							type="text"
							placeholder="Username"
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-6">
						<input
							type="password"
							placeholder="Password"
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<button
						type="submit"
						onClick={handleLogin}
						className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
					>
						Login
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
