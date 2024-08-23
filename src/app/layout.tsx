/* eslint-disable @next/next/no-img-element */
import { Analytics } from "@vercel/analytics/react";
import ThemeToggler from "@/components/theme-toggler";
import { ThemeProvider } from "@/app/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TabsDemo } from "../components/TabsDemo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "What's Trending ?",
	description:
		"Simple web site to check what are the trending movies and tv shows and anime.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} lg:w-[1050px] w-full p-4 sm:px-6 mx-auto min-h-[100vh] relative dark:bg-zinc-900`}>
				<Analytics />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<header>
						<h1 className="font-Fragment text-[38px] leading-[3rem] text-zinc-900 dark:text-zinc-100">
							What&apos;s Trending ?
						</h1>
						<p className="text-zinc-500 dark:text-zinc-400 text-[14px] sm:text-[18px] max-w-[600px] mt-2 mb-4">
							Simple website to check what are the <u>trending</u> Movies, TV
							Shows and Anime.
						</p>
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-2 w-[110px] sm:w-[120px]">
								<a href="https://letterboxd.com/AbsurdVoid/" target="_blank">
									<img
										src="/letterboxd-mono.svg"
										alt="letterboxd"
										className="w-5 h-5 "
									/>
								</a>

								<a href="https://x.com/11sma31l" target="_blank">
									<img src="/x.svg" alt="x" className="w-5 h-5 dark:invert" />
								</a>
								<a href="https://github.com/1sma31l" target="_blank">
									<img
										src="/github.svg"
										alt="github"
										className="w-5 h-5 dark:invert"
									/>
								</a>
								<a
									href="https://linkedin.com/in/ismail-boussekine"
									target="_blank">
									<img
										src="/linkedin.svg"
										alt="linkedin"
										className="w-5 h-5 dark:invert"
									/>
								</a>
							</div>
							<ThemeToggler />
						</div>
						<hr className="mt-6 dark:border-zinc-700 border-zinc-300" />
						<TabsDemo />
					</header>
					<main>{children}</main>
					<footer className="lg:w-[1050px] w-full pt-8 pb-4">
						<p className="font-Fragment text-[12px] sm:text-[14px] w-full text-center mx-auto">
							Made with <span className="hidden dark:inline-block">🤍</span>
							<span className="dark:hidden">🖤</span> by{" "}
							<strong>1sma31l</strong>
						</p>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
