import React from 'react';
import styles from '../styles/Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<NavLink
				to="/characters"
				className={(isActive) => (isActive ? styles.active : '')}
			>
				Characters
			</NavLink>

			<NavLink
				to="/comics"
				className={(isActive) => (isActive ? styles.active : '')}
			>
				Comics
			</NavLink>

			<NavLink
				to="/stories"
				className={(isActive) => (isActive ? styles.active : '')}
			>
				Stories
			</NavLink>
		</nav>
	);
}
