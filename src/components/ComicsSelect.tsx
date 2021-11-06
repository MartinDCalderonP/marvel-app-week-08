import React from 'react';
import { API } from '../common/enums';
import { IComic } from '../common/interfaces';
import { isComicsData } from '../common/typeGuards';
import useFetch from '../hooks/useFetch';

export default function ComicsSelect() {
	const fetchUrl = `${API.comicsUrl}?${API.limit}10`;
	const { data, loading } = useFetch(fetchUrl);

	return (
		<select>
			<option value="">Select a Comic</option>
			{!loading &&
				isComicsData(data).length > 0 &&
				isComicsData(data).map((comic: IComic) => (
					<option key={comic.id} value={comic.id}>
						{comic.title}
					</option>
				))}
		</select>
	);
}
