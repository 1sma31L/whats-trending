import { Tabs } from "./ui/tabs";

export function NavTabs() {
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
