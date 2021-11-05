import React, { useState } from 'react';
import styles from '../styles/Characters.module.scss';
import useFetch from '../hooks/useFetch';
// import data from '../jsons/characters.json';
import CardsContainer from '../components/CardsContainer';
import PaginationButtons from '../components/PaginationButtons';

export default function Characters() {
	const charactersUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=8`;
	const [fetchUrl, setFetchUrl] = useState(charactersUrl);
	const { data, loading } = useFetch(fetchUrl);
	const postsPerPage = 8;

	const handlePaginate = (pageNumber: number) => {
		setFetchUrl(charactersUrl + `&offset=${(pageNumber - 1) * postsPerPage}`);
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
