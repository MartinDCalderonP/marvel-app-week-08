import React, { useState } from 'react';
import styles from '../styles/Detail.module.scss';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { IPostId } from '../common/interfaces';
import { isCorrectData } from '../common/typeGuards';
import Spinner from '../components/Spinner';

export default function Detail() {
	const { postId } = useParams<IPostId>();
	const fetchUrl = `https://trainee-gamerbox.herokuapp.com/games/${postId}`;
	const { data, loading } = useFetch(fetchUrl);
	const [updater, setUpdater] = useState(0);

	const handleUpdateFetchData = () => {
		setUpdater((current) => current + 1);
	};

	return (
		<div className={styles.detailPage}>
			{loading && <Spinner />}

			{!loading && data && (
				<>
					<h1>{isCorrectData(data).name}</h1>

					<div className={styles.row}>
						<div className={styles.leftColumn}>
							<div className={styles.image}>
								<img
									src={isCorrectData(data).cover_art?.url}
									alt={isCorrectData(data).name}
								/>
							</div>
						</div>

						<div className={styles.dividerColumn}></div>

						<div className={styles.rightColumn}>
							<div className={styles.information}>
								<h3>Game Details</h3>

								<p>
									<b>Title: </b>
									{isCorrectData(data).name}
								</p>

								<p>
									<b>Genre: </b>
									{isCorrectData(data).genre.name}
								</p>

								{isCorrectData(data).publishers.length > 0 && (
									<p>
										<b>Publisher: </b>
									</p>
								)}

								{isCorrectData(data).platforms.length > 0 && (
									<p>
										<b>Platoforms: </b>
									</p>
								)}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
