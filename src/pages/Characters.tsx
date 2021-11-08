import React, { useState } from 'react';
import styles from '../styles/Characters.module.scss';
import { useParams, useHistory } from 'react-router';
import { paths, API } from '../common/enums';
import { IUseParams } from '../common/interfaces';
import { isCorrectData, hasTotal } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';
import Select from '../components/Select';
import Spinner from '../components/Spinner';
import CardsContainer from '../components/CardsContainer';
import PaginationButtons from '../components/PaginationButtons';

export default function Characters() {
	const { page, searchedTerm, comic, story } = useParams<IUseParams>();
	const [currentPage, setCurrentPage] = useState<number>(parseInt(page));
	const postsPerPage = 8;
	const offset = postsPerPage * (currentPage - 1);

	let fetchUrl = '';

	if (comic) {
		fetchUrl = `${API.comics}/${comic}${paths.characters}?${API.limit}${postsPerPage}&${API.offset}${offset}`;
	} else if (story) {
		fetchUrl = `${API.stories}/${story}${paths.characters}?${API.limit}${postsPerPage}&${API.offset}${offset}`;
	} else {
		fetchUrl =
			`${API.characters}?${API.limit}${postsPerPage}&${API.offset}${offset}` +
			(searchedTerm ? `&${API.search}${searchedTerm}` : '');
	}

	const { data, loading } = useFetch(fetchUrl);
	const history = useHistory();

	const handlePaginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);

		let newUrl = `${paths.characters}${paths.page}${pageNumber}`;

		if (searchedTerm) {
			newUrl = `${paths.search}${searchedTerm}${paths.page}${pageNumber}`;
		}

		history.push(newUrl);
	};

	return (
		<>
			<Select comics />
			<Select stories />
			<div className={styles.characters}>
				{loading && <Spinner />}

				{!loading && isCorrectData(data).length > 0 && (
					<>
						<CardsContainer loading={loading} posts={isCorrectData(data)} />

						<PaginationButtons
							totalPosts={hasTotal(data)}
							postsPerPage={postsPerPage}
							paginate={handlePaginate}
						/>
					</>
				)}

				{!loading && searchedTerm && isCorrectData(data).length === 0 && (
					<h1 className={styles.noResults}>
						{`No results found for "${searchedTerm.replaceAll('+', ' ')}".`}
					</h1>
				)}

				{!loading && comic && isCorrectData(data).length === 0 && (
					<h1 className={styles.noResults}>
						{`No results found for this comic.`}
					</h1>
				)}

				{!loading && story && isCorrectData(data).length === 0 && (
					<h1 className={styles.noResults}>
						{`No results found for this story.`}
					</h1>
				)}
			</div>
		</>
	);
}
