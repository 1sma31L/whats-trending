/* eslint-disable @next/next/no-img-element */
import { TabsDemo } from "../components/TabsDemo";
export default function Home() {
	return (
		<main className="lg:w-[1050px] w-full p-4 mx-auto">
			<h1 className="font-Fragment text-[38px] leading-[3rem]">
				What&apos;s Trending ?
			</h1>
			<p className="text-zinc-400 text-[16px] sm:text-[18px] max-w-[600px] mt-2 mb-8 ">
				Simple web site to check what are the <u>trending</u> Movies, TV Shows
				and Anime.
			</p>
			<div className="flex w-[80px] sm:w-[100px] justify-between items-center">
				<a href="https://x.com/11sma31l" target="_blank">
					<img src="/x.svg" alt="x" className="w-5 h-5" />
				</a>
				<a href="https://github.com/1sma31l" target="_blank">
					<img src="/github.svg" alt="github" className="w-5 h-5" />
				</a>
				<a href="https://linkedin.com/in/ismail-boussekine" target="_blank">
					<img src="/linkedin.svg" alt="linkedin" className="w-5 h-5" />
				</a>
			</div>
			<hr className="mt-6" />
			<TabsDemo />
		</main>
	);
}
