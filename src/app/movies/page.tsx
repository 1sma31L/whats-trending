import AnimatedDiv from "@/components/AnimatedDiv";
import React from "react";
import "dotenv/config";

async function page() {
	let movies = [];
	const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
		},
		next: { revalidate: 7200 },
	};
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		movies = data.results;
		console.log(movies[0]);
	} catch (err) {
		console.error(err);
	}
	return (
		<AnimatedDiv id={1} className="text-[12px] sm:text-[14px]">
			<div>
				{movies.map((movie: any) => {
					return (
						<div className="py-2">
							<h3 className="text-[20px]">{movie.title}</h3>
							<p className="text-[15px] text-zinc-500">{movie.overview}</p>
						</div>
					);
				})}
			</div>
		</AnimatedDiv>
	);
}

export default page;
