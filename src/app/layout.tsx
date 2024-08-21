/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TabsDemo } from "../components/TabsDemo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "What's Trending ?",
	description:
		"Simple web site to check what are the trending movies and tv shows and anime.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} lg:w-[1050px] w-full p-4 sm:px-6 mx-auto min-h-[93vh]`}>
				<header>
					{/* <p className="font-Fragment text-[12px] sm:text-[14px] pb-2 w-full text-center">
				Made with &lt;3 by Ismail Boussekine
			</p> */}
					<h1 className="font-Fragment text-[38px] leading-[3rem]">
						What&apos;s Trending ?
					</h1>
					<p className="text-zinc-500 text-[14px] sm:text-[18px] max-w-[600px] mt-2 mb-4">
						Simple website to check what are the <u>trending</u> Movies, TV
						Shows and Anime.
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
				</header>
				<main>{children}</main>
				<footer className="lg:w-[1050px] w-full p-4 sm:px-6 mx-auto">
					<p className="font-Fragment text-[12px] sm:text-[14px] w-full text-center  ">
						Made with 🖤 by <strong>1sma31l</strong>
					</p>
				</footer>
			</body>
		</html>
	);
}
