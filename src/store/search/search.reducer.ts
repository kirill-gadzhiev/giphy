import {SearchStore} from './search.types';
import {Action, AnyAction, applyMiddleware, createStore} from 'redux';
import {initialSearchStore, SearchActions} from './search.constants';
import thunk from 'redux-thunk';

const searchReducer = (state: SearchStore = initialSearchStore, action: AnyAction): SearchStore => {
	switch (action.type) {
		case SearchActions.SEARCH:
			return {
				...state,
				data: action.payload.data
			};
		default:
			return state;
	}
};

export const searchStore = createStore(searchReducer, applyMiddleware(thunk));



