import * as Types from "@/types/types";

async function fetchData(
	url: string,
	type: "anime" | "tv" | "movie",
	headers?: Types.Headers
): Promise<Types.Movie[] | Types.TVShow[] | Types.Anime[] | []> {
	const options = {
		method: "GET",
		headers,
		next: { revalidate: 7200 },
	};

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return (type !== "anime" ? data.results : data.data) || [];
	} catch (err) {
		console.error("Fetch error:", err);
		return [];
	}
}

async function isAvailable(id: number): Promise<boolean> {
	const url = `https://api.themoviedb.org/3/movie/${id}/watch/providers`;
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.ACCESS_TOKEN_AUTH}`,
		},
		next: { revalidate: 3600 },
	};

	try {
		const data = await fetch(url, options);
		const result = await data.json();
		return Object.entries(result.results).length === 0 ? false : true;
	} catch (err) {
		console.log(err);
	}
	return false;
}

export { isAvailable, fetchData };
