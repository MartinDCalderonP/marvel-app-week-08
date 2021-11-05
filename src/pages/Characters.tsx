import React from 'react';
import styles from '../styles/Characters.module.scss';
import useFetch from '../hooks/useFetch';
// import data from '../jsons/characters.json';
import CardsContainer from '../components/CardsContainer';
import PaginationButtons from '../components/PaginationButtons';

export default function Characters() {
	const fetchUrl = `https://gateway.marvel.com:443/v1/public/characters`;
	const { data, loading } = useFetch(fetchUrl);
	const postsPerPage = 8;

	const handlePaginate = (pageNumber: number) => {
		console.log(pageNumber);
	};

	const isCharactersData = (data: any) => {
		return data?.data && data?.data?.results;
	};

	const hasTotal = (data: any) => {
		return data?.data && data?.data?.total;
	};

	return (
		<div className={styles.characters}>
			<CardsContainer loading={loading} posts={isCharactersData(data)} />

			<PaginationButtons
				totalPosts={hasTotal(data)}
				postsPerPage={postsPerPage}
				paginate={handlePaginate}
			/>
		</div>
	);
}
