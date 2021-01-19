import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	const SidebarData = [
		{
			title: "Contacts",
			path: "/",
			icon: <i className="fas fa-home fa-lg" />,
			className: "nav-text"
		},
		{
			title: "Email",
			path: "/email",
			icon: <i className="far fa-address-card fa-lg" />,
			className: "nav-text"
		},
		{
			title: "Add Contact",
			path: "/add",
			icon: <i className="fas fa-plus fa-lg" />,
			className: "nav-text"
		}
	];

	return (
		<>
			<div className="navbar">
				<Link to="#" className="menus-bars">
					<i className="fas fa-bars fa-2x" onClick={showSidebar} />
				</Link>
				<div className="headingTab">Contact Management</div>
				<span />
			</div>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<i className="fas fa-times fa-2x" />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.className}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};
