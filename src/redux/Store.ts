import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./TaskAppState";

// Single Reducer
//const store = createStore(catsReducer);

// For getting data
//const xys = store.getState().cats;

//Multiple catsReducer
const reducers = combineReducers({taskState: tasksReducer});
const store = createStore(reducers)

// For getting data
//const xyz = store.getState().catState.cats;

export default store;