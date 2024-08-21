import AnimatedDiv from "@/components/AnimatedDiv";
export default function Home() {
	return (
		<AnimatedDiv id={0} className="text-[12px] sm:text-[14px]">
			<div className="flex flex-col gap-2  w-full">
				<p className="text-zinc-500 text-[16px] sm:text-[18px]">
					Find out about what it is trending right now in cinema or in anime
					using my website.
				</p>
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						How Does It Work ?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						It uses TMDB API under the hood to fetch the data and display it in
						a nice way.
					</p>
				</div>
				<hr />
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						How Was It Made ?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						It was made using React with Next.js for routing and SSR,
						TailwindCSS and Framer Motion for styling and animations, and some
						components from AceternutyUI and TMDB API for data fetching.
					</p>
				</div>
				<hr />
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						Why ?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						I Always wanted to make a really SIMPLE website to check what are
						currently trending in Entertainment industry.
					</p>
				</div>
				<hr />
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						Who The Heck Am I ?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						Ismail, Student at ENSTA, I live in Algeria, Hate it ?, So do I.
					</p>
				</div>
				<hr />
				<div className="py-2">
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px] pb-2">
						Wanna Hear Somthing ?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						Fuck the jews.
					</p>
				</div>
			</div>
		</AnimatedDiv>
	);
}
