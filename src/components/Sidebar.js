import React from 'react';

import '../app.css';
import SideNavLink from './SideNavLink.js';

function Sidebar() {
	return (
		<div className="w-1/6 bg-side h-screen">
			<div className="bg-black flex flex-col w-full h-36  text-whiteD">
				<a href="/">
					<img
						className="w-20 h-20 m-auto"
						src="https://res.cloudinary.com/keza/image/upload/v1655027670/adeo-logo_aailsc.png"
						alt="Logo"
					/>{' '}
				</a>
				<h1 className="text-center mb-2 text-lg font-lexend">
					Fullstack Developer
				</h1>
			</div>
			<nav>
				<ul className="flex flex-col  text-white">
					<a href="Home">Home</a>
					<a href="blog">Home</a>
					<a href="about">Home</a>
					<a href="#qmqm">Home</a>
					<a href="#qmqm">Blog</a>
				</ul>
			</nav>

			<SideNavLink path="/projects" name="Projects" />

			<div>social medias</div>
		</div>
	);
}

export default Sidebar;
