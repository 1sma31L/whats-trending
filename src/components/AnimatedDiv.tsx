"use client";
import { motion } from "framer-motion";
function AnimatedDiv({
	children,
	className,
	id,
}: {
	children: React.ReactNode;
	className?: string;
	id?: number;
}) {
	const animation = {
		initial: { opacity: 0, y: 100 },
		animate: {
			opacity: [0, 0, 1],
			y: [20, -10, 0],
			transition: {
				duration: 0.3,
				times: [0, 0.2, 1],
				ease: [0.175, 0.885, 0.32, 1.275],
			},
		},
		exit: { opacity: 0, y: -100 },
	};

	return (
		<motion.div
			key={id}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.3 }}
			variants={animation}>
			<div className={className}>{children}</div>
		</motion.div>
	);
}
export default AnimatedDiv;
