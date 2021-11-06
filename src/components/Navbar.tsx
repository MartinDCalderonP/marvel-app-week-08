import React from 'react';
import styles from '../styles/Navbar.module.scss';
import { paths } from '../common/enums';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<NavLink
				to={paths.home}
				className={(isActive) => (isActive ? styles.active : '')}
			>
				<FontAwesomeIcon className={styles.homeIcon} icon={faHome} />
				Home
			</NavLink>

			<NavLink
				to={paths.characters}
				className={(isActive) => (isActive ? styles.active : '')}
			>
				Characters
			</NavLink>

			<NavLink
				to={paths.comics}
				className={(isActive) => (isActive ? styles.active : '')}
			>
				Comics
			</NavLink>

			<NavLink
				to={paths.stories}
				className={(isActive) => (isActive ? styles.active : '')}
			>
				Stories
			</NavLink>
		</nav>
	);
}
