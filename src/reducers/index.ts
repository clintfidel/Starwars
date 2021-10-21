import { combineReducers } from "redux";

import rootsReducer from "./roots";
import rootReducer from "./root";

const indexReducer = combineReducers({
  roots: rootsReducer,
  root: rootReducer,
});

export type AppState = ReturnType<typeof indexReducer>;

export default indexReducer;
