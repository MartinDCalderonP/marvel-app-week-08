import React, { useState } from 'react';
import styles from '../styles/Characters.module.scss';
import { useParams, useHistory } from 'react-router';
import { paths, API } from '../common/enums';
import { IUseParams } from '../common/interfaces';
import { isCharactersData, hasTotal } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';
// import data from '../jsons/characters.json';
import Spinner from '../components/Spinner';
import SearchInput from '../components/SearchInput';
import CardsContainer from '../components/CardsContainer';
import PaginationButtons from '../components/PaginationButtons';

export default function Characters() {
	const { page } = useParams<IUseParams>();
	const [currentPage, setCurrentPage] = useState<number>(parseInt(page));
	const postsPerPage = 8;
	const offset = postsPerPage * (currentPage - 1);
	const fetchUrl = `${API.characters}?${API.limit}${postsPerPage}&${API.offset}${offset}`;
	const { data, loading } = useFetch(fetchUrl);
	const history = useHistory();

	const handlePaginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		history.push(`${paths.characters}${paths.page}${pageNumber}`);
	};

	return (
		<div className={styles.characters}>
			{loading && <Spinner />}

			{!loading && isCharactersData(data).length > 0 && (
				<>
					<SearchInput />

					<CardsContainer loading={loading} posts={isCharactersData(data)} />

					<PaginationButtons
						totalPosts={hasTotal(data)}
						postsPerPage={postsPerPage}
						paginate={handlePaginate}
					/>
				</>
			)}
		</div>
	);
}
