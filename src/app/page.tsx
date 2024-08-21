/* eslint-disable @next/next/no-img-element */
import AnimatedDiv from "@/components/AnimatedDiv";
import { TabsDemo } from "../components/TabsDemo";
export default function Home() {
	return (
		<AnimatedDiv id={0} className="text-[12px] sm:text-[14px]">
			<div className="container">
				<h2 className="section-title">About "What's Trending?"</h2>
				<div className="row">
					<div className="col-md-6">
						<p>
							"What's Trending?" is a simple and intuitive website that helps
							you stay up-to-date with the latest trends in the world of
							entertainment. Whether you're a movie enthusiast, a TV show
							fanatic, or an anime lover, this platform is your one-stop-shop
							for discovering the hottest titles and staying ahead of the curve.
						</p>
					</div>
					<div className="col-md-6">
						<p>
							Our team of dedicated researchers and passionate fans scour the
							internet, analyze the data, and curate the most comprehensive and
							up-to-date information on the trending movies, TV shows, and
							anime. We believe in providing our users with a seamless and
							enjoyable experience, so you can explore the latest trends with
							ease and confidence.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<p>
							At "What's Trending?", our mission is to be your trusted companion
							in the ever-evolving landscape of entertainment. We strive to be
							the go-to resource for anyone who wants to stay informed, discover
							new favorites, and engage with the global community of
							entertainment enthusiasts.
						</p>
					</div>
				</div>
			</div>
		</AnimatedDiv>
	);
}
