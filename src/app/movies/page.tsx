import "dotenv/config";

import {
	IoIosCheckmarkCircleOutline,
	IoMdCheckmarkCircle,
} from "react-icons/io";
import { fetchData, isAvailable } from "@/lib/basicFuncions";

import AnimatedDiv from "@/components/AnimatedDiv";
import Card from "@/components/Card";
import { Movie } from "@/types/types";
import React from "react";

export const generateMetadata = () => {
	return {
		title: "What's Trending in Movies ?",
	};
};

async function Page() {
	const movies = (await fetchData(
		"https://api.themoviedb.org/3/trending/movie/day?language=en-US",
		"movie",
		{
			accept: "application/json",
			Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
		}
	)) as Movie[];
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
			<div className="flex flex-col gap-2 mt-[30px] mb-[20px] w-full">
				<div className="flex gap-1 items-center justify-start w-full">
					<IoIosCheckmarkCircleOutline className="w-4 h-4" />
					<p>
						<strong> Released :</strong> (Available only in cinema)
					</p>
				</div>
				<div className="flex gap-1 items-start justify-start w-full">
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
