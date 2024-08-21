import { Tabs } from "./ui/tabs";
import AnimatedDiv from "./AnimatedDiv";
import About from "./About";
import Movies from "./Movies";
import TVShows from "./TVShows";
import Anime from "./Anime";
export function TabsDemo() {
	const tabs = [
		{
			title: "About",
			value: "about",
			content: (
				<AnimatedDiv
					className="text-[12px] sm:text-[14px] flex gap-2 flex-col"
					id={1}>
					<About />
				</AnimatedDiv>
			),
		},
		{
			title: "Movies",
			value: "movies",
			content: (
				<AnimatedDiv className="text-[12px] sm:text-[14px] " id={2}>
					<Movies />
				</AnimatedDiv>
			),
		},
		{
			title: "Tv Shows",
			value: "tv-shows",
			content: (
				<AnimatedDiv id={3} className="text-[12px] sm:text-[14px]">
					<TVShows />
				</AnimatedDiv>
			),
		},
		{
			title: "Anime",
			value: "anime",
			content: (
				<AnimatedDiv className="text-[12px] sm:text-[14px]" id={4}>
					<Anime />
				</AnimatedDiv>
			),
		},
	];

	return (
		<div>
			<Tabs tabs={tabs} />
		</div>
	);
}
