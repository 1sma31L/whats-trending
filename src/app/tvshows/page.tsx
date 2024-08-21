import AnimatedDiv from "@/components/AnimatedDiv";
import Card from "@/components/Card";
import React from "react";

export type TTVShow = {
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

async function getTvShows() {
	const url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
		},
		next: { revalidate: 7200 },
	};

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data.results || [];
	} catch (err) {
		console.error("Fetch error:", err);
		return [];
	}
}

async function page() {
	const tvshows: TTVShow[] = await getTvShows();
	const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
	return (
		<AnimatedDiv id={1} className="text-[12px] sm:text-[14px]">
			<div>
				{tvshows.length > 0 ? (
					tvshows.map((tvshow) => {
						return (
							<Card
								type="tv"
								title={tvshow.name}
								overview={tvshow.overview}
								poster_path={BASE_IMAGE_URL + tvshow.poster_path}
								key={tvshow.id}
								release_date={String(tvshow.first_air_date)}
								genre_ids={tvshow.genre_ids}
							/>
						);
					})
				) : (
					<p>No movies available.</p>
				)}
			</div>
		</AnimatedDiv>
	);
}

export default page;
