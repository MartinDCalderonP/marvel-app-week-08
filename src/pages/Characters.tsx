import React, { useState } from 'react';
import styles from '../styles/Characters.module.scss';
import { useParams, useHistory } from 'react-router';
import { paths, API } from '../common/enums';
import { IUseParams } from '../common/interfaces';
import { isCharactersData, hasTotal } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';
// import data from '../jsons/characters.json';
import Spinner from '../components/Spinner';
import CardsContainer from '../components/CardsContainer';
import PaginationButtons from '../components/PaginationButtons';

export default function Characters() {
	const { searchedTerm, page } = useParams<IUseParams>();
	const [currentPage, setCurrentPage] = useState<number>(parseInt(page));
	const postsPerPage = 8;
	const offset = postsPerPage * (currentPage - 1);
	const fetchUrl =
		`${API.characters}?${API.limit}${postsPerPage}&${API.offset}${offset}` +
		(searchedTerm ? `&${API.search}${searchedTerm}` : '');
	const { data, loading } = useFetch(fetchUrl);
	const history = useHistory();

	const handlePaginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);

		if (!searchedTerm) {
			history.push(`${paths.characters}${paths.page}${pageNumber}`);
		} else {
			history.push(`${paths.search}${searchedTerm}${paths.page}${pageNumber}`);
		}
	};

	return (
		<div className={styles.characters}>
			{loading && <Spinner />}

			{!loading && isCharactersData(data).length > 0 && (
				<>
					<CardsContainer loading={loading} posts={isCharactersData(data)} />

					<PaginationButtons
						totalPosts={hasTotal(data)}
						postsPerPage={postsPerPage}
						paginate={handlePaginate}
					/>
				</>
			)}

			{!loading && searchedTerm && isCharactersData(data).length === 0 && (
				<h1 className={styles.noResults}>
					{`No results found for "${searchedTerm.replaceAll('+', ' ')}".`}
				</h1>
			)}
		</div>
	);
}
