import React from 'react';
import styles from '../styles/Characters.module.scss';
// import useFetch from '../hooks/useFetch';
import data from '../jsons/characters.json';
import Card from '../components/Card';

export default function Characters() {
	// const fetchUrl = `https://gateway.marvel.com:443/v1/public/characters`;
	// const { data, loading } = useFetch(fetchUrl);

	return (
		<div className={styles.characters}>
			{data &&
				data?.data?.results?.map((character) => (
					<Card
						key={`character${character.id}`}
						id={character.id}
						name={character.name}
						thumbnail={
							character.thumbnail?.path + '.' + character.thumbnail?.extension
						}
					/>
				))}
		</div>
	);
}
