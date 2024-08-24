import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import Card from "@/components/Card";
import { Anime } from "@/types/types";
import { fetchData } from "@/lib/basicFuncions";

export const generateMetadata = () => {
	return {
		title: "What's Trending in Animes ?",
	};
};

async function page() {
	const animes: Anime[] = (await fetchData(
		"https://api.jikan.moe/v4/top/anime",
		"anime"
	)) as Anime[];

	return (
		<AnimatedDiv id={1} className="text-[12px] sm:text-[14px]">
			<div>
				{animes.length > 0 ? (
					animes.map((anime) => {
						return (
							<Card
								id={anime.mal_id}
								type="anime"
								title={anime.title}
								overview={anime.synopsis}
								poster_path={anime.images.jpg.image_url}
								key={anime.mal_id}
								genre_names={anime.genres.map((genre) => genre.name)}
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
