import Link from "next/link";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import * as Types from "../types/types";
import * as Genres from "../data/genres";

async function Card({
	title,
	overview,
	poster_path,
	release_date,
	genre_ids,
	type,
	id,
	isAvailable,
	genre_names,
}: Types.Card) {
	const genres =
		type === "movie"
			? Genres.movieGenres
			: type === "tv"
			? Genres.tvGenres
			: Genres.animeGenres;

	return (
		<Link
			href={
				type === "movie"
					? `https://letterboxd.com/tmdb/${id}`
					: type === "tv"
					? `https://www.themoviedb.org/tv/${id}`
					: `https://myanimelist.net/anime/${id}`
			}
			target="_blank">
			<div className="flex flex-row min-h-[150px] gap-1 mt-2 mb-4 border rounded-md md:rounded-xl  xl:hover:translate-x-2 overflow-hidden transition-all duration-300 dark:border-zinc-800 relative cursor-pointer">
				<img
					src={poster_path}
					alt="Poster Image"
					className="object-cover w-[120px]"
				/>
				<div className="p-3 pr-4 flex flex-col	">
					<h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-Fragment my-1 line-clamp-2 text-zinc-900 dark:text-zinc-100">
						{`${title} (${release_date ? release_date.slice(0, 4) : ""})`}
					</h2>
					<div className="flex-grow max-w-full">
						<p
							className={`indent-2 text-[12px] md:text-[14px] text-zinc-500 dark:text-zinc-400 w-full text-ellipsis leading-[1.1rem] 
								
									 md:line-clamp-4 lg:line-clamp-5 line-clamp-3
									
							`}>
							{overview}
						</p>
					</div>
					<div
						className={`flex flex-row flex-wrap gap-1 md:gap-2 mb-1 mt-3 ${
							type === "movie" ? "pr-8" : ""
						}`}>
						{/* Form movies and Tv Shows */}

						{genre_ids
							? genre_ids.map((id) => {
									const genre = genres.find((genre) => genre.id === id);
									return (
										<span
											key={id}
											className={`text-[10px] font-bold md:text-[13px] text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white py-[4px]   px-[8px] rounded-none`}>
											{genre?.name}
										</span>
									);
							  })
							: null}

						{/* For Anime */}

						{genre_names
							? genre_names.map((genre) => {
									return (
										<span
											key={genre}
											className={`text-[10px] font-bold md:text-[13px] text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white py-[4px]   px-[8px] rounded-none`}>
											{genre}
										</span>
									);
							  })
							: null}
					</div>
				</div>

				{/* Is Streamable */}
				<div className="absolute bottom-3 right-4 w-5 h-6">
					{isAvailable === undefined ? (
						""
					) : isAvailable ? (
						<IoMdCheckmarkCircle className="w-full h-full" />
					) : (
						<IoIosCheckmarkCircleOutline className="w-full h-full" />
					)}
				</div>
			</div>
		</Link>
	);
}

export default Card;
