import { Info } from "@/types/types";

export const info: Info[] = [
	{
		title: "How Does It Work?",
		description: `It uses TMDB API & Jikan API under the hood to fetch the data and
      display it. This will casually show the trending movies and TV
      shows at this moment (not really, I made Next.js SSG revalidate
      the API call every 2 hours – 7200 seconds – to make the response
      to the server fast), but you got the point.`,
	},
	{
		title: "How Was It Made?",
		description: `It was made using React with Next.js for routing and SSR,
      TailwindCSS and Framer Motion for styling and animations,
      some components from AceternutyUI and Shadcn-ui (FUCK THEM),
      and TMDB API with Jikan API for data fetching as mentioned before.`,
	},
	{
		title: "Why?",
		description: `I always wanted to make a really SIMPLE website to check what is
      currently trending in the entertainment industry.`,
	},
	{
		title: "Who The Heck Am I?",
		description: `Ismail, student at ENSTA. I live in Algeria. You hate it? So do I.`,
	},
];
