import React from 'react';
import styles from '../styles/Select.module.scss';
import { API } from '../common/enums';
import { ISelect, IComic, IStory } from '../common/interfaces';
import { isCorrectData } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';

export default function Select({ comics, stories }: ISelect) {
	const fetchUrl = comics
		? `${API.comicsUrl}?${API.limit}10`
		: `${API.storiesUrl}?${API.limit}10`;
	const { data, loading } = useFetch(fetchUrl);

	return (
		<>
			{!loading && (
				<select className={styles.select}>
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
