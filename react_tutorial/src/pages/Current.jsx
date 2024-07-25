import React, { useState } from 'react';
import SearchFrom from '../component/SearchFrom';
import WeatherInfoCard from '../component/WeatherInfoCard';
import Container from '../layout/Container';

const Current = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [weatherData, setWeatherData] = useState('');

	return (
		<div className="flex justify-center gap-3 items-center h-screen bg-gray-100">
			<Container>
				<h1 className="text-3xl font-semibold mb-6 text-green-500 text-center">
					Weather App
				</h1>
				<SearchFrom
					weatherData={setWeatherData}
					isLoading={setIsLoading}
				/>
				{isLoading ? 'Loading .....' : null}
				{weatherData ? <WeatherInfoCard data={weatherData} /> : null}
			</Container>
		</div>
	);
};

export default Current;
