"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Tab = {
	title: string;
	value: string;
	link: string;
};

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const pathName = usePathname();
	const [active, setActive] = useState<Tab>(
		propTabs.filter((tab) => {
			return tab.link === pathName;
		})[0]
	);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);
	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};
	return (
		<div className="flex flex-col">
			<div
				className={cn(
					"flex flex-row items-center justify-start [perspective:1000px] relative overflow-visible sm:overflow-visible no-visible-scrollbar max-w-full w-full text-[14px] sm:text-[16px] gap-1 py-8",
					containerClassName
				)}>
				{propTabs.map((tab, idx) => (
					<Link key={tab.title} href={tab.link}>
						<button
							key={tab.title}
							onClick={() => {
								moveSelectedTabToTop(idx);
							}}
							className={cn(
								"relative px-2 py-1 rounded-md xl:hover:bg-zinc-100 transition-all duration-75",
								tabClassName
							)}
							style={{
								transformStyle: "preserve-3d",
							}}>
							{active.value === tab.value && (
								<motion.div
									layoutId="clickedbutton"
									transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
									className={cn(
										"absolute inset-0 bg-zinc-800 dark:bg-zinc-800 rounded-md ",
										activeTabClassName
									)}
								/>
							)}
							<span
								className={`${
									active.value === tab.value
										? "text-zinc-100 dark:text-zinc-100"
										: "text-zinc-600 dark:text-zinc-600"
								} relative block transition-colors duration-500 ease-in-out`}>
								{tab.title}
							</span>
						</button>
					</Link>
				))}
			</div>
		</div>
	);
};
