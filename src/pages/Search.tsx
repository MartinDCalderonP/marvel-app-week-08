import React, { useState } from 'react';
import styles from '../styles/Search.module.scss';
import { useParams, useHistory } from 'react-router-dom';
import { paths, API } from '../common/enums';
import { IUseParams } from '../common/interfaces';
import { isCharactersData, hasTotal } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import CardsContainer from '../components/CardsContainer';
import PaginationButtons from '../components/PaginationButtons';

export default function Search() {
	const { searchedTerm, page } = useParams<IUseParams>();
	const [currentPage, setCurrentPage] = useState<number>(parseInt(page));
	const postsPerPage = 8;
	const offset = postsPerPage * (currentPage - 1);
	const fetchUrl = `${API.characters}?${API.search}${searchedTerm}&${API.limit}${postsPerPage}&${API.offset}${offset}`;
	const { data, loading } = useFetch(fetchUrl);
	const history = useHistory();

	const handlePaginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		history.push(`${paths.search}${searchedTerm}${paths.page}${pageNumber}`);
	};

	return (
		<div className={styles.searchPage}>
			{loading && <Spinner />}

			{!loading && isCharactersData(data).length > 0 && (
				<>
					<h1>{`Results for "${searchedTerm.replaceAll('+', ' ')}".`}</h1>

					<CardsContainer
						className={styles.results}
						loading={loading}
						posts={isCharactersData(data)}
					/>

					<PaginationButtons
						totalPosts={hasTotal(data)}
						postsPerPage={postsPerPage}
						paginate={handlePaginate}
					/>
				</>
			)}

			{!loading && isCharactersData(data).length === 0 && (
				<h1 className={styles.noResults}>
					{`No results found for "${searchedTerm.replaceAll('+', ' ')}".`}
				</h1>
			)}
		</div>
	);
}
