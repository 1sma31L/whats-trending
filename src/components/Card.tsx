import React from "react";
export type TCard = {
	title?: string;
	overview?: string;
	poster_path?: string;
	genre_ids?: number[];
	release_date?: string;
};

export type TGenre = {
	id: number;
	name: string;
};

async function getMoviesGenres() {
	const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
		},
		next: { revalidate: 7200 }, //DONT CACHE
	};
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data.genres || [];
	} catch (err) {
		console.error("Fetch error:", err);
		return [];
	}
}

async function Card({
	title,
	overview,
	poster_path,
	release_date,
	genre_ids,
}: TCard) {
	const genres: TGenre[] = await getMoviesGenres();
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
								className="text-[10px] text-white sm:text-[10px] bg-black py-1 px-2 rounded-full">
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
