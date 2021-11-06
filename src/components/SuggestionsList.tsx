import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import styles from '../styles/SuggestionsList.module.scss';
import useFetch from '../hooks/useFetch';
import { ISuggestionsList } from '../common/interfaces';
import { API } from '../common/enums';
import { isCharactersData } from '../common/typeGuards';

export default function SuggestionsList({
	searchedTerm,
	suggestionSelected,
	closeSuggestions,
	pressedKey,
}: ISuggestionsList) {
	const fetchUrl = `${API.charactersUrl}?${API.search}${searchedTerm}`;
	const { data, loading } = useFetch(fetchUrl);
	const ulRef = useRef<HTMLUListElement>(null);
	const [currentSuggestion, setCurrentSuggestion] = useState<number>(0);

	useEffect(() => {
		const handleClickOutside = (e: any) => {
			if (ulRef.current && !ulRef.current.contains(e.target)) {
				closeSuggestions(true);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ulRef, closeSuggestions]);

	useEffect(() => {
		if (pressedKey.keyCode === 38 && currentSuggestion > 0) {
			setCurrentSuggestion((current) => current - 1);
		}

		if (
			pressedKey.keyCode === 40 &&
			currentSuggestion < isCharactersData(data).length - 1
		) {
			setCurrentSuggestion((current) => current + 1);
		}

		if (pressedKey.keyCode === 13) {
			suggestionSelected(isCharactersData(data)[currentSuggestion].name);
			closeSuggestions(true);
		}
	}, [
		pressedKey,
		currentSuggestion,
		data,
		closeSuggestions,
		suggestionSelected,
	]);

	const handleSuggestionClick = (e: MouseEvent<HTMLLIElement>) => {
		if (typeof e.currentTarget.textContent === 'string') {
			suggestionSelected(e.currentTarget.textContent);
			closeSuggestions(true);
		}
	};

	return (
		<>
			{!loading && isCharactersData(data).length > 0 && (
				<ul className={styles.suggestionsList} ref={ulRef}>
					{isCharactersData(data)?.map((suggestion: any, index: number) => (
						<li
							className={
								styles.suggestion +
								(currentSuggestion === index ? ` ${styles.active}` : '')
							}
							key={suggestion.id}
							onClick={handleSuggestionClick}
						>
							{suggestion.name}
						</li>
					))}
				</ul>
			)}
		</>
	);
}
