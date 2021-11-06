import React, { useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import styles from '../styles/SearchInput.module.scss';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { paths } from '../common/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SuggestionsList from './SuggestionsList';

export default function SearchInput() {
	const [searchedTerm, setSearchedTerm] = useState<string>('');
	const [openSuggestions, setOpenSuggestions] = useState<boolean>(false);
	const [pressedKey, setPressedKey] = useState<number>(0);
	const history = useHistory();

	const handleSearchedTermChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchedTerm(e.target.value);
		setOpenSuggestions(true);
	};

	const searchTerm = (term: string) => {
		history.push(`${paths.search}${term.replaceAll(' ', '+')}${paths.page}1`);
	};

	const handleSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (searchedTerm !== '') {
			searchTerm(searchedTerm);
		}
	};

	const handleSuggestionSelected = (suggestionSelected: string) => {
		setSearchedTerm(suggestionSelected);
		searchTerm(suggestionSelected);
	};

	const handleCloseSuggestions = () => {
		setOpenSuggestions(false);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncePressKey = useCallback(
		_.debounce((e) => {
			setPressedKey(e);
		}, 500),
		[setPressedKey]
	);

	const handleKeyNavigation = (e: any) => {
		debouncePressKey(e);
	};

	return (
		<form className={styles.searchForm} autoComplete="off">
			<div className={styles.searchInput}>
				<input
					value={searchedTerm}
					onChange={handleSearchedTermChange}
					onKeyDown={handleKeyNavigation}
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

			{openSuggestions && (
				<SuggestionsList
					searchedTerm={searchedTerm}
					suggestionSelected={handleSuggestionSelected}
					closeSuggestions={handleCloseSuggestions}
					pressedKey={pressedKey}
				/>
			)}
		</form>
	);
}
