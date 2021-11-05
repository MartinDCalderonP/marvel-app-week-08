import React from 'react';
import styles from '../styles/CardsContainer.module.scss';
import { ICardsContainer } from '../common/interfaces';
import Spinner from './Spinner';
import Card from './Card';

export default function CardsContainer({
	className,
	loading,
	posts,
}: ICardsContainer) {
	return (
		<div className={styles.cardsContainer + (className ? ` ${className}` : '')}>
			{loading && <Spinner />}

			{!loading &&
				posts?.length > 0 &&
				posts?.map((post: any) => (
					<Card
						key={`character${post.id}`}
						id={post.id}
						name={post.name}
						thumbnail={post.thumbnail?.path + '.' + post.thumbnail?.extension}
					/>
				))}
		</div>
	);
}
