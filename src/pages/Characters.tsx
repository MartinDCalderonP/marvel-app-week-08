import React, { useState, useEffect } from 'react';
import styles from '../styles/Characters.module.scss';
import { useHistory, useParams } from 'react-router';
import { paths } from '../common/enums';
import { ICharactersUseParams } from '../common/interfaces';
import useFetch from '../hooks/useFetch';
// import data from '../jsons/characters.json';
import CardsContainer from '../components/CardsContainer';
import PaginationButtons from '../components/PaginationButtons';

export default function Characters() {
	const params = useParams<ICharactersUseParams>();
	const page = parseInt(params.page) || 1;
	const charactersUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=8`;
	const [fetchUrl, setFetchUrl] = useState(charactersUrl);
	const { data, loading } = useFetch(fetchUrl);
	const postsPerPage = 8;
	const history = useHistory();

	useEffect(() => {
		if (page && page > 1) {
			setFetchUrl(`${charactersUrl}&offset=${(page - 1) * postsPerPage}`);
		}
	}, [page, charactersUrl]);

	const handlePaginate = (pageNumber: number) => {
		setFetchUrl(charactersUrl + `&offset=${(pageNumber - 1) * postsPerPage}`);
		history.push(`${paths.characters}${paths.page}=${pageNumber}`);
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
