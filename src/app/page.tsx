import AnimatedDiv from "@/components/AnimatedDiv";
export default function Home() {
	return (
		<AnimatedDiv id={0} className="text-[12px] sm:text-[14px]">
			<div className="flex flex-col gap-2  w-full">
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						How Does It Work ?
					</h2>

					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						It uses TMDB API under the hood to fetch the data and display it in
						a nice way.
					</p>
					<div className="absolute"></div>
				</div>
				<hr />
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						How Was It Made ?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						It was made using React with Next.js for routing and SSR,
						TailwindCSS and Framer Motion for styling and animations,some
						components from AceternutyUI and TMDB API with Kitsu API for data
						fetching.
					</p>
				</div>
				<hr />
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						Why ?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						I Always wanted to make a really SIMPLE website to check what is
						currently trending in the Entertainment industry.
					</p>
				</div>
				<hr />
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						Who The Heck Am I ?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						Ismail, Student at ENSTA, I live in Algeria, You hate it ?, So do I.
					</p>
				</div>
			</div>
		</AnimatedDiv>
	);
}
