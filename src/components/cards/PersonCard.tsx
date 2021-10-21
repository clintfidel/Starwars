import ViewDetails from './ViewDetails';
import moment from 'moment';
import { Person, RootType } from '../../actions/root/types';
import React, { useState } from 'react';
import { addFavourites, getFavourited, removeFavourite } from '../../helpers/favourite';

const PersonCard = ({ person }: { person: Person }) => {
	const favourited = getFavourited();

	const [isFavourited, setIsFavourited] = useState(person.url in favourited);

	const handleFavourite = (root: RootType) => {
		if (isFavourited)
			removeFavourite(root, setIsFavourited);
		else
			addFavourites(root, setIsFavourited);
	};

	const valueAsArray: Array<{}> = [
		{ value1: person.name },
		{ value2: person.birth_year },
		{ value3: person.gender },
		{ value4: person.mass },
		{ value5: person.skin_color },
		{ value6: person.hair_color },
		{ value7: moment(person.created).format('MM-DD-YYYY') },
		{ value8: person.eye_color },
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
			key={person.url}
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
							<p className="card-title text-bold mb-4">{person.name}</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3">
							<p className="card-subtitle text-center">
								{'Gender'}
							</p>
							<p className="pt-1 text-center">
								{person.gender}
							</p>
						</div>
						<div className="pt-3">
							<p className="card-subtitle text-center">
								{'Skin Color'}
							</p>
							<p className="pt-1 text-center">
								{person.skin_color}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<div className="pt-3 btn-bottom">
							<p className="pt-1 card-subtitle text-center">
								{'Mass'}
							</p>
							<p className="pt-1 text-center">
								{person.mass}
							</p>
						</div>
						<div className="pt-3">
							<p className="card-subtitle text-center">
								{'Birth Year'}
							</p>
							<p className="pt-1 text-center">
								{person.birth_year}
							</p>
						</div>
					</div>
					<hr className="bg-white" />
					<div className="d-flex justify-content-between">
						<button className="bg-transparent btn-bottom favourite border-0 text-reset"
							onClick={() => handleFavourite(person)}
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

export default PersonCard;
