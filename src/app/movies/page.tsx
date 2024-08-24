import AnimatedDiv from "@/components/AnimatedDiv";
import React from "react";
import "dotenv/config";
import Card from "@/components/Card";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";

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

const isAvailable = async (id: number) => {
	const url = `https://api.themoviedb.org/3/movie/${id}/watch/providers`;
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
		},
		cache: "no-store" as RequestCache,
	};
	try {
		const data = await fetch(url, options);
		const result = await data.json();

		return Object.entries(result.results).length === 0 ? false : true;
	} catch (err) {
		console.log(err);
	}
	return false;
};

export const generateMetadata = () => {
	return {
		title: "What's Trending in Movies ?",
	};
};

async function Page() {
	const movies: TMovie[] = await getMovies();
	const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200/";
	return (
		<AnimatedDiv id={1} className="text-[12px] sm:text-[14px]">
			<div>
				{movies.length > 0 ? (
					movies.map(async (movie) => {
						const isMovieAvailable: boolean = await isAvailable(movie.id);
						return (
							<Card
								type="movie"
								title={movie.title}
								overview={movie.overview}
								poster_path={BASE_IMAGE_URL + movie.poster_path}
								key={movie.id}
								release_date={String(movie.release_date)}
								genre_ids={movie.genre_ids}
								id={movie.id}
								isAvailable={isMovieAvailable}
							/>
						);
					})
				) : (
					<p>No movies are available.</p>
				)}
			</div>
			<div className="flex flex-col gap-2 mt-[30px] mb-[20px]">
				<div className="flex gap-1 items-center">
					<IoIosCheckmarkCircleOutline className="w-4 h-4" />
					<p>
						<strong> Released :</strong> (Available only in cinema)
					</p>
				</div>
				<div className="flex gap-1 items-start">
					<IoMdCheckmarkCircle className="w-4 h-4" />
					<p>
						<strong> Released on Streming Services :</strong> ( like Netflix,
						Amazon Prime, Or illegaly )
					</p>
				</div>
			</div>
		</AnimatedDiv>
	);
}

export default Page;
