import { Tabs } from "./ui/tabs";
import AnimatedDiv from "./AnimatedDiv";
// import About from "./About";
// import Movies from "./Movies";
// import TVShows from "./TVShows";
// import Anime from "./Anime";
export function TabsDemo() {
	const tabs = [
		{
			title: "About",
			value: "about",
			link: "/",
		},
		{
			title: "Movies",
			value: "movies",
			link: "/movies",
		},
		{
			title: "Tv Shows",
			value: "tvshows",
			link: "/tvshows",
		},
		{
			title: "Anime",
			value: "anime",
			link: "/anime",
		},
	];

	return (
		<div>
			<Tabs tabs={tabs} />
		</div>
	);
}
