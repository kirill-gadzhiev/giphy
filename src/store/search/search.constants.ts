import {SearchStore} from './search.types';

export enum SearchActions {
	SEARCH = 'search',
}

export const initialSearchStore: SearchStore = {
	data: [],
	loading: false,
	error: false,
};
