import React, { useEffect } from 'react';
import Loader from "react-loader-spinner";
import { EnumRootType, Person, Planet, Film, Vehicle, Species, Starship, RootType } from "../actions/root/types"
import { PersonCard, PlanetCard, FilmCard, SpecieCard, VehicleCard, StarshipCard } from "./cards"
import { useDispatch, useSelector } from 'react-redux';
import { fetchRootRequest, fetchRootSuccess } from "../actions/root/rootAction";
import {
  getRootSelector
} from "../selectors/root";
const Root = ({ type }: { type: EnumRootType }) => {
  const dispatch = useDispatch();
  const root = useSelector(getRootSelector);

  useEffect(() => {
    if(type === "favourites") {
      let favouritedFromLocalStorage: string | null = localStorage.getItem('favourited')    
      let favourited = favouritedFromLocalStorage ? JSON.parse(favouritedFromLocalStorage) : {} ;
      dispatch(fetchRootSuccess({
        count: 0,
        previous: undefined,
        next: undefined,
        results: Object.values(favourited)
      }));
    } else {
      dispatch(fetchRootRequest(type));
    }
  }, [dispatch, type]);

  const renderCard = (dataValue: RootType[]) => {
    if (dataValue.length) {
      return dataValue.map((rootData, index) => {
        let value = null;
        if (root?.payload) {
          if ('birth_year' in rootData) {
              value = <PersonCard key={index} person={rootData as Person} />
          } else if ('terrain' in rootData) {
              value = <PlanetCard key={index} planet={rootData as Planet} />
          } else if ('title' in rootData) {
              value = <FilmCard key={index} film={rootData as Film} />
          } else if ('MGLT' in rootData) {
              value = <StarshipCard key={index} starship={rootData as Starship} />
          } else if ('designation' in rootData) {
              value = <SpecieCard key={index} specie={rootData as Species} />
          } else if ('vehicle_class' in rootData) {
              value = <VehicleCard key={index} vehicle={rootData as Vehicle} />
          } else {
              value = (<div className="d-flex justify-content-between">
                <div className="text-center">
                  No Data Available
                </div>
              </div>)
          }
        }
        return value
      });
    }

    return (
      <div className="mt-2 d-flex justify-content-center">
        <Loader
          type="Puff"
          color="#fff"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          { (() => {
            let dataValue = root.payload ? root.payload.results : [];
            return renderCard(dataValue)
          })() }
        </div>
      </div>
    </div>
  );
};

export default Root;
