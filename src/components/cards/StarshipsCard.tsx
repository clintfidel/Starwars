import ViewDetails from './ViewDetails';
import moment from 'moment';
import React, { useState } from 'react';
import { RootType, Starship } from '../../actions/root/types';
import { addFavourites, getFavourited, removeFavourite } from '../../helpers/favourite';

const StarshipCard = ({ starship }: { starship: Starship }) => {
	const favourited = getFavourited();
	const [isFavourited, setIsFavourited] = useState(starship.url in favourited);

	const handleFavourite = (root: RootType) => {
		if (isFavourited)
			removeFavourite(root, setIsFavourited);
		else
			addFavourites(root, setIsFavourited);
	};
	const valueAsArray: Array<{}> = [
		{ value1: starship.name },
		{ value2: starship.model },
		{ value3: starship.hyperdrive_rating },
		{ value4: starship.length },
		{ value5: starship.passengers },
		{ value6: starship.cost_in_credits },
		{ value7: moment(starship.created).format('MM-DD-YYYY') },
		{ value8: starship.max_atmosphering_speed },
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
			key={starship.url}
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
							<p className="card-title text-bold mb-4">{starship.name}</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Rating'}
							</p>
							<p className="pt-1 text-center">
								{starship.hyperdrive_rating}
							</p>
						</div>
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Length'}
							</p>
							<p className="pt-1 text-center">
								{starship.length}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 card-details">
							<p className="pt-1 card-subtitle text-center">
								{'Passengers'}
							</p>
							<p className="pt-1 text-center">
								{starship.passengers}
							</p>
						</div>
						<div className="pt-3 btn-bottom">
							<p className="card-subtitle text-center">
								{'Model'}
							</p>
							<p className="pt-1 text-center">
								{starship.model}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<button className="bg-transparent btn-bottom favourite border-0 text-reset"
							onClick={() => handleFavourite(starship)}
							title="Favourite"
						>{`${isFavourited ? '⭑' : '☆'}`}</button>
						<button className="bg-transparent p-3 view-btn btn-bottom"
							onClick={showModal}
						>{'View More'}</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StarshipCard;
