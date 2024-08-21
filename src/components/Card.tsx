import { color } from "framer-motion";
import React from "react";

export type TCard = {
	title: string;
	overview: string;
	poster_path: string;
	genre_ids: number[];
	release_date: string;
	type: "movie" | "tv";
};
export type TGenere = {
	id: number;
	name: string;
	color?: string;
};

const movieGenres: TGenere[] = [
	{
		id: 28,
		name: "Action",
		color: "bg-black",
	},
	{
		id: 12,
		name: "Adventure",
		color: "bg-blue-500",
	},
	{
		id: 16,
		name: "Animation",
		color: "bg-green-500",
	},
	{
		id: 35,
		name: "Comedy",
		color: "bg-yellow-500",
	},
	{
		id: 80,
		name: "Crime",
		color: "bg-red-500",
	},
	{
		id: 99,
		name: "Documentary",
		color: "bg-purple-500",
	},
	{
		id: 18,
		name: "Drama",
		color: "bg-indigo-500",
	},
	{
		id: 10751,
		name: "Family",
		color: "bg-purple-800",
	},
	{
		id: 14,
		name: "Fantasy",
		color: "bg-blue-800",
	},
	{
		id: 36,
		name: "History",
		color: "bg-yellow-800",
	},
	{
		id: 27,
		name: "Horror",
		color: "bg-red-800",
	},
	{
		id: 10402,
		name: "Music",
		color: "bg-green-800",
	},
	{
		id: 9648,
		name: "Mystery",
		color: "bg-gray-800",
	},
	{
		id: 10749,
		name: "Romance",
		color: "bg-pink-500",
	},
	{
		id: 878,
		name: "Science Fiction",
		color: "bg-blue-900",
	},
	{
		id: 10770,
		name: "TV Movie",
	},
	{
		id: 53,
		name: "Thriller",
		color: "bg-gray-500",
	},
	{
		id: 10752,
		name: "War",
		color: "bg-gray-500",
	},
	{
		id: 37,
		name: "Western",
		color: "bg-yellow-500",
	},
];
const tvGenres: TGenere[] = [
	{
		id: 10759,
		name: "Action & Adventure",
		color: "bg-black",
	},
	{
		id: 16,
		name: "Animation",
		color: "bg-green-500",
	},
	{
		id: 35,
		name: "Comedy",
		color: "bg-yellow-500",
	},
	{
		id: 80,
		name: "Crime",
		color: "bg-red-500",
	},
	{
		id: 99,
		name: "Documentary",
		color: "bg-purple-500",
	},
	{
		id: 18,
		name: "Drama",
		color: "bg-indigo-500",
	},
	{
		id: 10751,
		name: "Family",
		color: "bg-purple-800",
	},
	{
		id: 10762,
		name: "Kids",
		color: "bg-purple-500",
	},
	{
		id: 9648,
		name: "Mystery",
		color: "bg-gray-800",
	},
	{
		id: 10763,
		name: "News",
		color: "bg-blue-800",
	},
	{
		id: 10764,
		name: "Reality",
		color: "bg-gray-800",
	},
	{
		id: 10765,
		name: "Sci-Fi & Fantasy",
		color: "bg-blue-900",
	},
	{
		id: 10766,
		name: "Soap",
		color: "bg-blue-300",
	},
	{
		id: 10767,
		name: "Talk",
		color: "bg-gray-300",
	},
	{
		id: 10768,
		name: "War & Politics",
		color: "bg-gray-500",
	},
	{
		id: 37,
		name: "Western",
		color: "bg-yellow-500",
	},
];

async function Card({
	title,
	overview,
	poster_path,
	release_date,
	genre_ids,
	type,
}: TCard) {
	const genres = type === "movie" ? movieGenres : tvGenres;
	return (
		<div className="flex flex-row min-h-[150px] gap-4 my-4 border rounded-xl overflow-hidden">
			<img
				src={poster_path}
				alt=""
				className="w-[110px] md:w-[150px] object-cover"
			/>
			<div className="py-2">
				<h3 className="font-bold text-[18px] sm:text-[20px] font-Fragment my-1">
					{`${title} (${release_date ? release_date.slice(0, 4) : ""})`}
				</h3>
				<p className="text-[10px] sm:text-[14px] text-zinc-500 pr-2 indent-1 line-clamp-5 md:line-clamp-6 max-w-full mb-2">
					{overview}
				</p>
				<div className="flex flex-row flex-wrap gap-y-1 gap-x-1 pr-1">
					{genre_ids?.map((id) => {
						const genre = genres.find((genre) => genre.id === id);
						return (
							<span
								key={id}
								className={`text-[10px] md:text-[13px] text-white
								${genre?.color || "bg-[#2d3748]"}
								
								bg-black sm:text-[10px] py-1 px-2 rounded-full`}>
								{genre?.name}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Card;
