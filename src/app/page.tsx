import AnimatedDiv from "@/components/AnimatedDiv";
import { info } from "@/data/homePageInfo";
export default function Home() {
	return (
		<>
			<AnimatedDiv id={0} className="text-[12px] sm:text-[14px]">
				<div className="flex flex-col gap-2 w-full">
					{info.map((item, index) => {
						return (
							<>
								<div className="my-2">
									<h2 className="text-zinc-900 dark:text-white font-Fragment text-[20px] sm:text-[24px] pb-2">
										{item.title}
									</h2>
									<p className="text-zinc-500 dark:text-zinc-400 text-[12px] md:text-[14px]">
										{item.description}
									</p>
								</div>
								{index < info.length - 1 ? (
									<hr className="dark:border-zinc-700 border-zinc-200" />
								) : null}
							</>
						);
					})}
				</div>
			</AnimatedDiv>
		</>
	);
}
