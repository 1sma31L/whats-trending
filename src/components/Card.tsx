import React from "react";
export type TCard = {
	title?: string;
	overview?: string;
	poster_path?: string;
	genre_ids?: number[];
	release_date?: string;
};
function Card({
	title,
	overview,
	poster_path,
	release_date,
	genre_ids,
}: TCard) {
	return (
		<div className="flex flex-row min-h-[150px] gap-4 my-4 border rounded-xl overflow-hidden">
			<img src={poster_path} alt="" className="w-[100px] object-cover" />
			<div className="py-2">
				<h3 className="font-bold text-[18px] sm:text-[20px] font-Fragment my-1">
					{`${title} (${release_date ? release_date.slice(0, 4) : ""})`}
				</h3>
				<p className="text-[10px] sm:text-[14px] text-zinc-500 pr-2 indent-1 line-clamp-6 max-w-full mb-2">
					{overview}
				</p>
			</div>
		</div>
	);
}

export default Card;
