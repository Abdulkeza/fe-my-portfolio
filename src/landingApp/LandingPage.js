import React from 'react';

import '../app.css';
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';

function LandingPage() {
	return (
		<div className="p-0 flex">
			<Sidebar />
			<div className="w-5/6 bg-primary h-screen">
				<Navbar />
				<h1 className="text-2xl font-medium text-whiteD text-center">
					Hi here! This is Keza-codes{' '}
				</h1>
			</div>
		</div>
	);
}

export default LandingPage;
