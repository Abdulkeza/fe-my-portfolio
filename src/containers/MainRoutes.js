import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../landingApp/LandingPage.js';

function MainRoutes() {
	return (
		<Routes>
			<Route exact path="/" element={<LandingPage />} />
		</Routes>
	);
}

export default MainRoutes;
