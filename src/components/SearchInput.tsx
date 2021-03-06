import React, { useState, ChangeEvent, MouseEvent, useCallback } from 'react';
import styles from '../styles/SearchInput.module.scss';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { paths } from '../common/enums';
import { ISearchInput } from '../common/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchInput({
	characters,
	comics,
	stories,
}: ISearchInput) {
	const [searchedTerm, setSearchedTerm] = useState<string>('');
	const history = useHistory();

	const searchTerm = (term: string) => {
		let section = '';

		if (characters) {
			section = paths.characters;
		} else if (comics) {
			section = paths.comics;
		} else if (stories) {
			section = paths.stories;
		}

		history.push(
			`${section}${paths.search}${term.replaceAll(' ', '+')}${paths.page}1`
		);
	};

	const handleSearchedTermChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchedTerm(e.target.value);
		debounceSearchedTerm(e.target.value);
	};

	// eslint-disable-next-line
	const debounceSearchedTerm = useCallback(
		_.debounce((term) => {
			searchTerm(term);
		}, 500),
		[searchTerm]
	);

	const handleSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (searchedTerm !== '') {
			searchTerm(searchedTerm);
		}
	};

	return (
		<form className={styles.searchForm} autoComplete="off">
			<div className={styles.searchInput}>
				<input
					value={searchedTerm}
					onChange={handleSearchedTermChange}
					type="text"
					name="search"
					placeholder="Search"
				/>

				<button
					className={styles.searchButton}
					onClick={handleSearchButtonClick}
				>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
		</form>
	);
}
