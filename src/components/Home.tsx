import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "react-loader-spinner";
import "../assets/style.css"
import classnames from 'classnames';
import Logo from "../assets/images/logo.png"
import sentenceCase from 'sentence-case';
import Root from "./Root";
import {
  TabContent,
  TabPane,
} from 'reactstrap';
import {
  getRootsSelector,
  getErrorSelector,
  getLoadingSelector
} from "../selectors/roots";
import { fetchRootsRequest, fetchRootsFailure, fetchRootsSuccess } from "../actions/roots/rootsAction";
import { EnumRootType } from '../actions/root/types';

const Home = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState<EnumRootType>(EnumRootType.People);

  const roots = useSelector(getRootsSelector);
  const rootsError = useSelector(getErrorSelector);
  useEffect(() => {
    dispatch(fetchRootsRequest());

    if (roots) {
      dispatch(fetchRootsSuccess(roots))
    } else {
      dispatch(fetchRootsFailure(rootsError))
    }
  }, [dispatch]);

  const rootsLoading = useSelector(getLoadingSelector);

  const keys = Object.keys(roots || {});
  const addFav = [...keys, "favourites"]
  return (
    <div className="main-container">
      <img src={Logo} alt="logo" className="d-flex mb-5 logo" />
      {
        !rootsLoading ? (
          roots !== undefined ? (
            <div className={'mt-5'}>
              <div className="tabs-container btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
                {addFav.map(k => (
                  <div className="btn-group btn-cont" role="group" key={k}>
                    <button key={k} type="button"
                      data-toggle="tab"
                      className={`py-4 ${classnames({ active: tab === k })} ${tab === k ? "tab-button-active " : "tab-button"}`}
                      onClick={() => setTab(k as EnumRootType)}
                    >
                      {sentenceCase(k)}
                    </button>
                  </div>
                ))}
              </div>

              <TabContent activeTab={tab}>
                {addFav.map(k => (
                  <TabPane
                    className={`${tab === k ? "d-block " : "d-hidden"}`}
                    key={k}
                    tabId={k}
                  >
                    <Root type={tab} />
                  </TabPane>
                ))}
              </TabContent>
            </div>) : (<div>{rootsError}</div>)
        ) : (<div className="mt-2 d-flex justify-content-center">
          <Loader
            type="Puff"
            color="#fff"
            height={100}
            width={100}
            timeout={5000} //3 secs
          />
        </div>)
      }

    </div>
  );
};

export default Home;
