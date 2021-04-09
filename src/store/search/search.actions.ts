import {SearchActions} from './search.constants';
import axios from 'axios';
import {API_TOKEN, GIPHY_BASE_URL} from '../../constants';
import {Dispatch} from 'redux';

export const searchGifs = (query: string) => {
	return (dispatch: Dispatch) => {
		const params = {
			api_key: API_TOKEN,
			q: query,
			limit: 25,
			offset: 0,
			rating: 'r',
			lang: 'en',
		};

		axios
			.get(`${GIPHY_BASE_URL}search`, {params})
			.then((res) => dispatch({
				type: SearchActions.SEARCH,
				payload: res.data,
			}));
	};
};
