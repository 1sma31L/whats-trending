import AnimatedDiv from "@/components/AnimatedDiv";
import Card from "@/components/Card";
import React from "react";

type TAnime = {
	mal_id: number;
	url: string;
	images: { [key: string]: Image };
	trailer: Trailer;
	approved: boolean;
	titles: Title[];
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: Aired;
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
	broadcast: Broadcast;
	producers: Demographic[];
	licensors: any[];
	studios: Demographic[];
	genres: Demographic[];
	explicit_genres: any[];
	themes: any[];
	demographics: Demographic[];
};

type Aired = {
	from: Date;
	to: Date;
	prop: Prop;
	string: string;
};

type Prop = {
	from: From;
	to: From;
};

type From = {
	day: number;
	month: number;
	year: number;
};

type Broadcast = {
	day: string;
	time: string;
	timezone: string;
	string: string;
};

type Demographic = {
	mal_id: number;
	type: Type;
	name: string;
	url: string;
};

enum Type {
	Anime = "anime",
}

type Image = {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
};

type Title = {
	type: string;
	title: string;
};

type Trailer = {
	youtube_id: string;
	url: string;
	embed_url: string;
	images: Images;
};

type Images = {
	image_url: string;
	small_image_url: string;
	medium_image_url: string;
	large_image_url: string;
	maximum_image_url: string;
};

async function getAnimes() {
	// const url =
	// 	"https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20";
	const url = "https://api.jikan.moe/v4/top/anime";
	const options = { next: { revalidate: 7200 } };

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data.data || [];
	} catch (err) {
		console.error("Fetch error:", err);
		return [];
	}
}

async function page() {
	const animes: TAnime[] = await getAnimes();

	return (
		<AnimatedDiv id={1} className="text-[12px] sm:text-[14px]">
			<div>
				{animes.length > 0 ? (
					animes.map((anime) => {
						return (
							<Card
								type="anime"
								title={anime.title}
								overview={anime.synopsis}
								poster_path={anime.images.jpg.image_url}
								key={anime.mal_id}
								genre_ids={anime.genres.map((genre) => genre.name)} // ["",""]
								release_date={String(anime.aired.prop.from.year)}
							/>
						);
					})
				) : (
					<p>No animes are available.</p>
				)}
			</div>
		</AnimatedDiv>
	);
}
export default page;
