import AnimatedDiv from "@/components/AnimatedDiv";
import Card from "@/components/Card";
import React from "react";

export type TAnime = {
	id: string;
	type: string;
	links: AnimeLinks;
	attributes: Attributes;
	relationships: { [key: string]: Relationship };
};

export type Attributes = {
	createdAt: Date;
	updatedAt: Date;
	slug: string;
	synopsis: string;
	description: string;
	coverImageTopOffset: number;
	titles: Titles;
	canonicalTitle: string;
	abbreviatedTitles: string[];
	averageRating: string;
	ratingFrequencies: { [key: string]: string };
	userCount: number;
	favoritesCount: number;
	startDate: Date;
	endDate: null;
	nextRelease: Date;
	popularityRank: number;
	ratingRank: number;
	ageRating: string;
	ageRatingGuide: string;
	subtype: string;
	status: string;
	tba: null;
	posterImage: PosterImage;
	coverImage: CoverImage;
	episodeCount: null;
	episodeLength: number;
	totalLength: number;
	youtubeVideoId: string;
	showType: string;
	nsfw: boolean;
};

export type CoverImage = {
	tiny: string;
	large: string;
	small: string;
	original: string;
	meta: Meta;
};

export type Meta = {
	dimensions: Dimensions;
};

export type Dimensions = {
	tiny: Large;
	large: Large;
	small: Large;
	medium?: Large;
};

export type Large = {
	width: number;
	height: number;
};

export type PosterImage = {
	tiny: string;
	large: string;
	small: string;
	medium: string;
	original: string;
	meta: Meta;
};

export type Titles = {
	en: string;
	en_jp: string;
	ja_jp: string;
};

export type AnimeLinks = {
	self: string;
};

export type Relationship = {
	links: RelationshipLinks;
};

export type RelationshipLinks = {
	self: string;
	related: string;
};

async function getAnimes() {
	const url =
		"https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20";
	const options = { next: { revalidate: 7200 } };

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data.data || [];
	} catch (err) {
		console.error("Fetch error:", err);
		return [];
	}
}

async function page() {
	const animes: TAnime[] = await getAnimes();
	const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
	return (
		<AnimatedDiv id={1} className="text-[12px] sm:text-[14px]">
			<div>
				{animes.length > 0 ? (
					animes.map((anime) => {
						return (
							<Card
								type="anime"
								title={anime.attributes.canonicalTitle}
								overview={anime.attributes.description}
								poster_path={anime.attributes.posterImage.original}
								key={anime.id}
								release_date={String(anime.attributes.startDate)}
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
