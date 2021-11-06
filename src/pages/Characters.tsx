import React, { useState } from 'react';
import styles from '../styles/Characters.module.scss';
import { useHistory, useParams } from 'react-router';
import { paths, API } from '../common/enums';
import { isCharactersData, hasTotal } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';
// import data from '../jsons/characters.json';
import CardsContainer from '../components/CardsContainer';
import PaginationButtons from '../components/PaginationButtons';

export default function Characters() {
	const params = useParams<{ page: string }>();
	const [currentPage, setCurrentPage] = useState<number>(parseInt(params.page));
	const postsPerPage = 8;
	const fetchUrl = `${API.characters}?limit=8&offset=${
		(currentPage - 1) * postsPerPage
	}`;
	const { data, loading } = useFetch(fetchUrl);
	const history = useHistory();

	const handlePaginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		history.push(`${paths.characters}${paths.page}=${pageNumber}`);
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
