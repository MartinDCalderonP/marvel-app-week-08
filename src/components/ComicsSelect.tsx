import React from 'react';
import styles from '../styles/ComicsSelect.module.scss';
import { API } from '../common/enums';
import { IComic } from '../common/interfaces';
import { isComicsData } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';

export default function ComicsSelect() {
	const fetchUrl = `${API.comicsUrl}?${API.limit}10`;
	const { data, loading } = useFetch(fetchUrl);

	return (
		<>
			{!loading && (
				<select className={styles.select}>
					<option hidden>Select a Comic</option>

					{isComicsData(data).length > 0 &&
						isComicsData(data).map((comic: IComic) => (
							<option key={comic.id} value={comic.id}>
								{comic.title}
							</option>
						))}
				</select>
			)}
		</>
	);
}
