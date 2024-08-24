export type Card = {
	title: string;
	overview: string;
	poster_path: string;
	genre_ids?: number[] | string[];
	release_date: string;
	type: "movie" | "tv" | "anime";
	id: number;
	isAvailable?: boolean;
	genre_names?: string[];
};

export type Genere = {
	id?: number;
	name: string;
	color: string;
};

export type Headers = {
	accept: string;
	Authorization: string;
};

export type Info = {
	title: string;
	description: string;
};

export type SocialMedia = {
	name: string;
	link: string;
	src: string;
	className?: string;
};

export type Movie = {
	backdrop_path: string;
	id: number;
	title: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: Date;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type TVShow = {
	backdrop_path: string;
	id: number;
	name: string;
	original_name: string;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	first_air_date: Date;
	vote_average: number;
	vote_count: number;
	origin_country: string[];
};

export type Anime = {
	mal_id: number;
	url: string;
	images: {
		[key: string]: {
			image_url: string;
			small_image_url: string;
			large_image_url: string;
		};
	};
	trailer: {
		youtube_id: string;
		url: string;
		embed_url: string;
		images: {
			image_url: string;
			small_image_url: string;
			medium_image_url: string;
			large_image_url: string;
			maximum_image_url: string;
		};
	};
	approved: boolean;
	titles: { type: string; title: string }[];
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: {
		from: Date;
		to: Date;
		prop: {
			from: { day: number; month: number; year: number };
			to: { day: number; month: number; year: number };
		};
		string: string;
	};
	duration: string;
	rating: string;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	season: string;
	year: number;
	broadcast: {
		day: string;
		time: string;
		timezone: string;
		string: string;
	};
	producers: { mal_id: number; type: "anime"; name: string; url: string }[];
	licensors: any[];
	studios: { mal_id: number; type: "anime"; name: string; url: string }[];
	genres: { mal_id: number; type: "anime"; name: string; url: string }[];
	explicit_genres: any[];
	themes: any[];
	demographics: { mal_id: number; type: "anime"; name: string; url: string }[];
};
