import ViewDetails from './ViewDetails';
import moment from 'moment';
import React, { useState } from 'react';
import { RootType, Vehicle } from '../../actions/root/types';
import { addFavourites, getFavourited, removeFavourite } from '../../helpers/favourite';

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
	const favourited = getFavourited();
	const [isFavourited, setIsFavourited] = useState(vehicle.url in favourited);

	const handleFavourite = (root: RootType) => {
		if (isFavourited)
			removeFavourite(root, setIsFavourited);
		else
			addFavourites(root, setIsFavourited);
	};

	const valueAsArray: Array<{}> = [
		{ value1: vehicle.name },
		{ value2: vehicle.model },
		{ value3: vehicle.vehicle_class },
		{ value4: vehicle.length },
		{ value5: vehicle.passengers },
		{ value6: vehicle.cargo_capacity },
		{ value7: moment(vehicle.created).format('MM-DD-YYYY') },
		{ value8: vehicle.max_atmosphering_speed },
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
			key={vehicle.url}
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
							<p className="card-title text-bold mb-4">{vehicle.name}</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Class'}
							</p>
							<p className="pt-1 text-center">
								{vehicle.vehicle_class}
							</p>
						</div>
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Length'}
							</p>
							<p className="pt-1 text-center">
								{vehicle.length}
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
								{vehicle.passengers}
							</p>
						</div>
						<div className="pt-3 btn-bottom">
							<p className="card-subtitle text-center">
								{'Model'}
							</p>
							<p className="pt-1 text-center">
								{vehicle.model}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<button className="bg-transparent btn-bottom favourite border-0 text-reset"
							onClick={() => handleFavourite(vehicle)}
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

export default VehicleCard;
