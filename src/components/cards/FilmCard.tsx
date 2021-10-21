import ViewDetails from './ViewDetails';
import moment from 'moment';
import { Film, RootType } from '../../actions/root/types';
import React, { useState } from 'react';
import { addFavourites, getFavourited, removeFavourite } from '../../helpers/favourite';

const FilmCard = ({ film }: { film: Film }) => {
	const favourited = getFavourited();
	const [isFavourited, setIsFavourited] = useState(film.url in favourited);

	const handleFavourite = (root: RootType) => {
		if (isFavourited)
			removeFavourite(root, setIsFavourited);
		else
			addFavourites(root, setIsFavourited);
	};

	const valueAsArray: Array<{}> = [
		{ value1: film.title },
		{ value2: film.producer },
		{ value3: moment(film.created).format('MM-DD-YYYY') },
		{ value4: film.episode_id },
		{ value5: film.release_date },
		{ value6: film.director },
		{ value7: '' },
		{ value8: moment(film.edited).format('MM-DD-YYYY') },
	];
	const [show, setShow] = useState(false);
	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	return (
		<div className="col-md-4 mb-4 "
			key={film.url}
		>
			<ViewDetails handleClose={hideModal}
				show={show}
				value={valueAsArray}
			/>
			<div
				className="new-card card pt-4 px-4"
			>
				<div className="card-block">
					<div className="d-flex justify-content-center">
						<div className="text-center">
							<p className="card-title text-bold mb-4">{film.title}</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Created'}
							</p>
							<p className="pt-1 text-center">
								{moment(film.created).format('MM-DD-YYYY')}
							</p>
						</div>
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Episode'}
							</p>
							<p className="pt-1 text-center">
								{film.episode_id}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between sec-2">
						<div className="pt-3 card-details">
							<p className="pt-1 card-subtitle text-center">
								{'Release Date'}
							</p>
							<p className="pt-1 text-center">
								{film.release_date}
							</p>
						</div>
						<div className="pt-3 btn-bottom">
							<p className="card-subtitle text-center">
								{'Producer'}
							</p>
							<p className="pt-1 text-center">
								{film.producer}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<button className="bg-transparent btn-bottom favourite border-0 text-reset"
							onClick={() => handleFavourite(film)}
							title="Favourite"
						>{`${isFavourited ? '⭑' : '☆'}`}</button>
						<button className="bg-transparent  p-3 view-btn btn-bottom"
							onClick={showModal}
						>{'View More'}</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilmCard;
