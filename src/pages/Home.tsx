import React from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.home}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
				alt="Logo"
			/>
		</div>
	);
}
