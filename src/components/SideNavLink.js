/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

function SideNavLink({ path, name }) {
	return (
		<li>
			<NavLink className="NavLink text-whiteD" to={path}>
				{name}
			</NavLink>
		</li>
	);
}

export default SideNavLink;
