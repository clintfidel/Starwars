import ViewDetails from './ViewDetails';
import moment from 'moment';
import { Planet, RootType } from '../../actions/root/types';
import React, { useState } from 'react';
import { addFavourites, getFavourited, removeFavourite } from '../../helpers/favourite';
import '../../assets/style.css';

const PlanetCard = ({ planet }: { planet: Planet }) => {
	const valueAsArray: Array<{}> = [
		{ value1: planet.name },
		{ value2: planet.gravity },
		{ value3: planet.diameter },
		{ value4: planet.population },
		{ value5: planet.terrain },
		{ value6: planet.orbital_period },
		{ value7: moment(planet.created).format('MM-DD-YYYY') },
		{ value8: planet.surface_water },
	];
	const [show, setShow] = useState(false);
	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};
	const favourited = getFavourited();

	const [isFavourited, setIsFavourited] = useState(planet.url in favourited);

	const handleFavourite = (root: RootType) => {
		if (isFavourited)
			removeFavourite(root, setIsFavourited);
		else
			addFavourites(root, setIsFavourited);
	};

	return (
		<div className="col-md-4 mb-4 "
			key={planet.url}
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
							<p className="card-title text-bold mb-4">{planet.name}</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Diameter'}
							</p>
							<p className="pt-1 text-center">
								{planet.diameter}
							</p>
						</div>
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Population'}
							</p>
							<p className="pt-1 text-center">
								{planet.population}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 card-details">
							<p className="pt-1 card-subtitle text-center">
								{'Terrain'}
							</p>
							<p className="pt-1 text-center">
								{planet.terrain}
							</p>
						</div>
						<div className="pt-3 btn-bottom">
							<p className="card-subtitle text-center">
								{'Gravity'}
							</p>
							<p className="pt-1 text-center">
								{planet.gravity}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<button className="bg-transparent btn-bottom favourite border-0 text-reset"
							onClick={() => handleFavourite(planet)}
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

export default PlanetCard;
