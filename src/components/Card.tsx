import React from "react";

export type TGenere = {
	id?: number;
	name: string;
	color: string;
};

export type TCard = {
	title: string;
	overview: string;
	poster_path: string;
	genre_ids?: number[] | string[];
	release_date: string;
	type: "movie" | "tv" | "anime";
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
		color: "bg-gray-300",
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
const animeGenres: TGenere[] = [
	{
		name: "Action",
		color: "bg-red-500",
	},
	{
		name: "Adventure",
		color: "bg-yellow-500",
	},
	{
		name: "Avant Garde",
		color: "bg-blue-500",
	},
	{
		name: "Award Winning",
		color: "bg-green-500",
	},
	{
		name: "Boys Love",
		color: "bg-pink-500",
	},
	{
		name: "Comedy",
		color: "bg-orange-500",
	},
	{
		name: "Drama",
		color: "bg-purple-500",
	},
	{
		name: "Fantasy",
		color: "bg-indigo-500",
	},
	{
		name: "Girls Love",
		color: "bg-pink-300",
	},
	{
		name: "Gourmet",
		color: "bg-yellow-300",
	},
	{
		name: "Horror",
		color: "bg-gray-800",
	},
	{
		name: "Mystery",
		color: "bg-purple-600",
	},
	{
		name: "Romance",
		color: "bg-pink-600",
	},
	{
		name: "Sci-Fi",
		color: "bg-blue-600",
	},
	{
		name: "Slice of Life",
		color: "bg-green-300",
	},
	{
		name: "Sports",
		color: "bg-red-400",
	},
	{
		name: "Supernatural",
		color: "bg-indigo-600",
	},
	{
		name: "Suspense",
		color: "bg-gray-700",
	},
	{
		name: "Ecchi",
		color: "bg-pink-400",
	},
	{
		name: "Erotica",
		color: "bg-red-700",
	},
	{
		name: "Hentai",
		color: "bg-purple-700",
	},
	{
		name: "Adult Cast",
		color: "bg-gray-600",
	},
	{
		name: "Anthropomorphic",
		color: "bg-yellow-400",
	},
	{
		name: "CGDCT",
		color: "bg-pink-200",
	},
	{
		name: "Childcare",
		color: "bg-blue-200",
	},
	{
		name: "Combat Sports",
		color: "bg-red-600",
	},
	{
		name: "Crossdressing",
		color: "bg-indigo-300",
	},
	{
		name: "Delinquents",
		color: "bg-gray-500",
	},
	{
		name: "Detective",
		color: "bg-yellow-600",
	},
	{
		name: "Educational",
		color: "bg-green-400",
	},
	{
		name: "Gag Humor",
		color: "bg-yellow-300",
	},
	{
		name: "Gore",
		color: "bg-red-700",
	},
	{
		name: "Harem",
		color: "bg-pink-500",
	},
	{
		name: "High Stakes Game",
		color: "bg-purple-400",
	},
	{
		name: "Historical",
		color: "bg-yellow-700",
	},
	{
		name: "Idols (Female)",
		color: "bg-pink-300",
	},
	{
		name: "Idols (Male)",
		color: "bg-blue-300",
	},
	{
		name: "Isekai",
		color: "bg-indigo-400",
	},
	{
		name: "Iyashikei",
		color: "bg-green-200",
	},
	{
		name: "Love Polygon",
		color: "bg-pink-700",
	},
	{
		name: "Magical Sex Shift",
		color: "bg-purple-200",
	},
	{
		name: "Mahou Shoujo",
		color: "bg-pink-400",
	},
	{
		name: "Martial Arts",
		color: "bg-red-600",
	},
	{
		name: "Mecha",
		color: "bg-blue-700",
	},
	{
		name: "Medical",
		color: "bg-green-700",
	},
	{
		name: "Military",
		color: "bg-gray-800",
	},
	{
		name: "Music",
		color: "bg-purple-300",
	},
	{
		name: "Mythology",
		color: "bg-yellow-800",
	},
	{
		name: "Organized Crime",
		color: "bg-gray-600",
	},
	{
		name: "Otaku Culture",
		color: "bg-purple-500",
	},
	{
		name: "Parody",
		color: "bg-orange-300",
	},
	{
		name: "Performing Arts",
		color: "bg-pink-200",
	},
	{
		name: "Pets",
		color: "bg-yellow-200",
	},
	{
		name: "Psychological",
		color: "bg-gray-700",
	},
	{
		name: "Racing",
		color: "bg-red-500",
	},
	{
		name: "Reincarnation",
		color: "bg-indigo-200",
	},
	{
		name: "Reverse Harem",
		color: "bg-pink-500",
	},
	{
		name: "Romantic Subtext",
		color: "bg-pink-400",
	},
	{
		name: "Samurai",
		color: "bg-red-800",
	},
	{
		name: "School",
		color: "bg-yellow-500",
	},
	{
		name: "Showbiz",
		color: "bg-blue-200",
	},
	{
		name: "Space",
		color: "bg-gray-600",
	},
	{
		name: "Strategy Game",
		color: "bg-purple-600",
	},
	{
		name: "Super Power",
		color: "bg-indigo-600",
	},
	{
		name: "Survival",
		color: "bg-gray-900",
	},
	{
		name: "Team Sports",
		color: "bg-red-500",
	},
	{
		name: "Time Travel",
		color: "bg-blue-800",
	},
	{
		name: "Vampire",
		color: "bg-red-900",
	},
	{
		name: "Video Game",
		color: "bg-yellow-400",
	},
	{
		name: "Visual Arts",
		color: "bg-pink-200",
	},
	{
		name: "Workplace",
		color: "bg-blue-400",
	},
	{
		name: "Josei",
		color: "bg-purple-200",
	},
	{
		name: "Kids",
		color: "bg-blue-500",
	},
	{
		name: "Seinen",
		color: "bg-gray-500",
	},
	{
		name: "Shoujo",
		color: "bg-pink-300",
	},
	{
		name: "Shounen",
		color: "bg-red-300",
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
	const genres =
		type === "movie" ? movieGenres : type === "tv" ? tvGenres : animeGenres;
	return (
		<div className="flex flex-row min-h-[150px] gap-4 my-4 border rounded-md md:rounded-xl  xl:hover:translate-x-2 overflow-hidden transition-all duration-300">
			<img
				src={poster_path}
				alt=""
				className={`w-[110px] md:w-[150px] object-cover`}
			/>
			<div className="p-3 r-4 order-2">
				<h3 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] font-Fragment my-1 pr-1">
					{`${title} (${release_date ? release_date.slice(0, 4) : ""})`}
				</h3>
				<p className="text-[10px] sm:text-[14px] md:text-[16px] text-zinc-500 py-1 indent-1 line-clamp-4  max-w-full mb-2">
					{overview}
				</p>
				<div className="flex flex-row flex-wrap gap-y-1 gap-x-1 pr-1">
					{genre_ids && type !== "anime"
						? genre_ids.map((id) => {
								const genre = genres.find((genre) => genre.id === id);
								return (
									<span
										key={id}
										className={`text-[10px] md:text-[13px] text-white
								${genre?.color || "bg-[#2d3748]"}
								
								bg-black sm:text-[10px] py-1 px-2 rounded-sm`}>
										{genre?.name}
									</span>
								);
						  })
						: null}

					{/* For Anime */}

					{genre_ids && type === "anime"
						? genre_ids.map((genre) => {
								// const genre = genres.find((genre) => genre.id === id);
								const genreColor = animeGenres.find(
									(animeGenre) => animeGenre.name === genre
								)?.color;
								return (
									<span
										key={genre}
										className={`text-[10px] md:text-[13px] text-white
								${genreColor || "bg-[#2d3748]"}
								
								bg-black sm:text-[10px] py-1 px-2 rounded-sm `}>
										{genre}
									</span>
								);
						  })
						: null}
				</div>
			</div>
		</div>
	);
}

export default Card;