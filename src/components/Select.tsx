import React, { useState } from 'react';
import styles from '../styles/Select.module.scss';
import { useHistory, useLocation } from 'react-router';
import { paths, API } from '../common/enums';
import { ISelect, IComic, IStory } from '../common/interfaces';
import { isCorrectData } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';

const formats = [
	'comic',
	'magazine',
	'trade paperback',
	'hardcover',
	'digest',
	'graphic novel',
	'digital comic',
	'infinite comic',
];

export default function Select({ comics, stories, format }: ISelect) {
	const fetchUrl = comics
		? `${API.comics}?${API.limit}10`
		: `${API.stories}?${API.limit}10`;
	const { data, loading } = useFetch(fetchUrl);
	const [selectedValue, setSelectedValue] = useState<string>('');
	const history = useHistory();
	const location = useLocation();

	const handleSelectValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(e.target.value);

		let newUrl = '';

		if (comics) {
			newUrl = `${location.pathname}${paths.comic}${e.target.value}`;
		}

		if (stories) {
			newUrl = `${location.pathname}${paths.story}${e.target.value}`;
		}

		if (format) {
			newUrl = `${location.pathname}${paths.format}${e.target.value}`;
		}

		history.push(newUrl);
	};

	return (
		<>
			{!loading && (
				<select
					className={styles.select}
					value={selectedValue}
					onChange={handleSelectValueChange}
				>
					<option hidden>
						Select a {format ? 'Format' : comics ? 'Comic' : 'Story'}
					</option>

					{!format
						? isCorrectData(data).length > 0 &&
						  isCorrectData(data).map((item: IComic | IStory) => (
								<option key={item.id} value={item.id}>
									{item.title}
								</option>
						  ))
						: formats.map((item: string, index) => (
								<option key={`format${index}`} value={item}>
									{item}
								</option>
						  ))}
				</select>
			)}
		</>
	);
}
