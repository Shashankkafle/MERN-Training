import React from 'react';
import { useParams } from 'react-router-dom';
const ParamsPage = () => {
	const params = useParams();
	return <div>The param is {params.city}</div>;
};

export default ParamsPage;
