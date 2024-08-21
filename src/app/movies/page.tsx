import AnimatedDiv from "@/components/AnimatedDiv";
import React from "react";
import "dotenv/config";
import Card from "@/components/Card";

export type TMovie = {
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

async function getMovies() {
	const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
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

async function Page() {
	const movies: TMovie[] = await getMovies();
	const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
	return (
		<AnimatedDiv id={1} className="text-[12px] sm:text-[14px]">
			<div>
				{movies.length > 0 ? (
					movies.map((movie) => {
						return (
							<Card
								type="movie"
								title={movie.title}
								overview={movie.overview}
								poster_path={BASE_IMAGE_URL + movie.poster_path}
								key={movie.id}
								release_date={String(movie.release_date)}
								genre_ids={movie.genre_ids}
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

export default Page;
