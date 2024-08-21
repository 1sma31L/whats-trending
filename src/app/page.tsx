import AnimatedDiv from "@/components/AnimatedDiv";
export default function Home() {
	return (
		<AnimatedDiv id={0} className="text-[12px] sm:text-[14px]">
			<div className="flex flex-col gap-2">
				<p className="text-zinc-500 text-[16px] sm:text-[18px]">
					Find out about what it is trending right now in cinema or in aninme
					using my website.
				</p>
				<div>
					<h2 className="text-zinc-900 font-Fragment text-[20px] sm:text-[24px]">
						How Was It Made?
					</h2>
					<p className="text-zinc-500 text-[16px] sm:text-[18px]">
						It uses TMDB API under the hood to fetch the data and display it in
						a nice way.
					</p>
				</div>
			</div>
		</AnimatedDiv>
	);
}
