import AnimatedDiv from "@/components/AnimatedDiv";
import React from "react";
import "dotenv/config";

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

	return (
		<AnimatedDiv id={1} className="text-[12px] sm:text-[14px]">
			<div>
				{movies.length > 0 ? (
					movies.map((movie) => (
						<div key={movie.id} className="py-2">
							<h3 className="text-[20px]">{movie.title}</h3>
							<p className="text-[15px] text-zinc-500">{movie.overview}</p>
						</div>
					))
				) : (
					<p>No movies available.</p>
				)}
			</div>
		</AnimatedDiv>
	);
}

export default Page;
