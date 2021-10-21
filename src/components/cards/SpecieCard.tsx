import ViewDetails from './ViewDetails';
import moment from 'moment';
import React, { useState } from 'react';
import { RootType, Species } from '../../actions/root/types';
import { addFavourites, getFavourited, removeFavourite } from '../../helpers/favourite';

const SpecieCard = ({ specie }: { specie: Species }) => {
	const favourited = getFavourited();
	const [isFavourited, setIsFavourited] = useState(specie.url in favourited);

	const handleFavourite = (root: RootType) => {
		if (isFavourited)
			removeFavourite(root, setIsFavourited);
		else
			addFavourites(root, setIsFavourited);
	};
	const valueAsArray: Array<{}> = [
		{ value1: specie.name },
		{ value2: specie.designation },
		{ value3: specie.average_height },
		{ value4: specie.language },
		{ value5: specie.average_lifespan },
		{ value6: specie.hair_colors },
		{ value7: moment(specie.created).format('MM-DD-YYYY') },
		{ value8: specie.eye_colors },
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
			key={specie.url}
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
							<p className="card-title text-bold mb-4">{specie.name}</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Height'}
							</p>
							<p className="pt-1 text-center">
								{specie.average_height}
							</p>
						</div>
						<div className="pt-3 card-details">
							<p className="card-subtitle text-center">
								{'Language'}
							</p>
							<p className="pt-1 text-center">
								{specie.language}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 card-details">
							<p className="pt-1 card-subtitle text-center">
								{'Life Span'}
							</p>
							<p className="pt-1 text-center">
								{specie.average_lifespan}
							</p>
						</div>
						<div className="pt-3 btn-bottom">
							<p className="card-subtitle text-center">
								{'Designation'}
							</p>
							<p className="pt-1 text-center">
								{specie.designation}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<button className="bg-transparent btn-bottom favourite border-0 text-reset"
							onClick={() => handleFavourite(specie)}
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

export default SpecieCard;
