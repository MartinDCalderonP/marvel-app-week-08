import React from 'react';
import styles from '../styles/Card.module.scss';
import { Link } from 'react-router-dom';
import { ICard } from '../common/interfaces';
import { paths } from '../common/enums';

export default function Card({ id, name, thumbnail }: ICard) {
	return (
		<Link
			className={`${styles.card} ${styles.appearCard}`}
			to={`${paths.characters}/${id}`}
		>
			<p>{name}</p>
			{thumbnail !== 'undefined.undefined' && (
				<div className={styles.cardImage}>
					<img src={thumbnail} alt={name} />
				</div>
			)}
		</Link>
	);
}
