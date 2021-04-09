export interface Gif {
	title: string;
	images: {
		original: {
			height: string;
			width: string;
			url: string;
		}
	}
}

export interface SearchStore {
	data: Gif[];
	loading: boolean;
	error: boolean;
}
