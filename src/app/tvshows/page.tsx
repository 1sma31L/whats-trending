import AnimatedDiv from "@/components/AnimatedDiv";
import Card from "@/components/Card";
import React from "react";
import { fetchData } from "@/lib/basicFuncions";
import { TVShow } from "@/types/types";

export const generateMetadata = () => {
	return {
		title: "What's Trending in TV Shows ?",
	};
};

async function page() {
	const tvshows = (await fetchData(
		"https://api.themoviedb.org/3/trending/tv/day?language=en-US",
		"tv",
		{
			accept: "application/json",
			Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
		}
	)) as TVShow[];
	const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200/";

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
								id={tvshow.id}
							/>
						);
					})
				) : (
					<p>No tv shows are available.</p>
				)}
			</div>
		</AnimatedDiv>
	);
}

export default page;
