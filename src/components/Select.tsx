import React, { useState } from 'react';
import styles from '../styles/Select.module.scss';
import { useHistory, useLocation } from 'react-router';
import { paths, API } from '../common/enums';
import { ISelect, IComic, IStory } from '../common/interfaces';
import { isCorrectData } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';

export default function Select({ comics, stories }: ISelect) {
	const fetchUrl = comics
		? `${API.comicsUrl}?${API.limit}10`
		: `${API.storiesUrl}?${API.limit}10`;
	const { data, loading } = useFetch(fetchUrl);
	const [selectedValue, setSelectedValue] = useState<string>('');
	const history = useHistory();
	const location = useLocation();

	const handleSelectValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(e.target.value);

		let newUrl = '';

		if (comics) {
			newUrl = `${location.pathname}${paths.comics}${e.target.value}`;
		}

		if (stories) {
			newUrl = `${location.pathname}${paths.stories}${e.target.value}`;
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
					<option hidden>Select a {comics ? 'Comic' : 'Story'}.</option>

					{isCorrectData(data).length > 0 &&
						isCorrectData(data).map((item: IComic | IStory) => (
							<option key={item.id} value={item.id}>
								{item.title}
							</option>
						))}
				</select>
			)}
		</>
	);
}
