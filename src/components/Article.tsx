// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "./ui/card";

import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const Link = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noreferrer"
		className="text-blue-700 hover:underline"
	>
		{children}
	</a>
);

const delimiterIconStyles = {
	padding: "10px",
	backgroundSize: "cover",
	backgroundImage: "url(img/arrow.png)",
};

export function Article() {
	// const ZIM_FILES = [
	// 	{
	// 		title: "Stéphane Coillet-Matillon",
	// 		thumbnail: "1.png",
	// 		url: "https://library.kiwix.org/viewer#litterature-audio-poetry_fr_2024-08/index.html",
	// 	},
	// 	{
	// 		title: "Canadian Prepper",
	// 		thumbnail: "2.png",
	// 		url: "https://library.kiwix.org/viewer#canadian_prepper_bugoutconcepts_en_2024-07/index.html",
	// 	},
	// 	{
	// 		title: "Deus Ex Silicium",
	// 		thumbnail: "3.png",
	// 		url: "https://dev.library.kiwix.org/viewer#deus-ex-silicium_fr_all_2024-07/index.html",
	// 	},
	// ];

	const BEFORE_AFTER_IMAGES = [
		{
			before: {
				imageUrl: "img/before-1.webp",
			},
			after: {
				imageUrl: "img/after-1.webp",
			},
			caption: "Channel Landing Page",
		},
		{
			before: {
				imageUrl: "img/before-2.webp",
			},
			after: {
				imageUrl: "img/after-2.webp",
			},
			caption: "Video Player Page",
		},
	];

	return (
		<div className="flex flex-col min-h-dvh">
			<header className="bg-primary py-12 md:px-6">
				<div className="container max-w-4xl">
					<div className="space-y-2 not-prose">
						<h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground lg:text-5xl">
							Google Summer of Code 2024 - Kiwix
						</h1>
						<div className="flex items-center gap-2 text-sm text-primary-foreground">
							<div>By Dan Niles</div>
							<div className="h-1 w-1 rounded-full bg-primary-foreground/50" />
							<div>August 6, 2024</div>
						</div>
					</div>
				</div>
			</header>
			<main className="py-7 md:px-6">
				<article className="container max-w-4xl grid gap-4">
					<p>
						During the summer of 2024, I participated in{" "}
						<Link href="https://summerofcode.withgoogle.com/">
							Google Summer of Code
						</Link>{" "}
						(GSoC) with <Link href="https://kiwix.org/">Kiwix</Link>, working on
						a project titled <strong>YouTube UI Revamp</strong>. This document
						outlines the initial tasks, changes made throughout the project,
						developments achieved, and work that remains to be done.
					</p>
					<p>
						Kiwix is a free and open-source offline web browser. Users can
						download content in the form of{" "}
						<Link href={"https://wiki.openzim.org/wiki/ZIM_file_format"}>
							ZIM
						</Link>{" "}
						files for offline viewing with Kiwix.
					</p>

					<h3 className="text-2xl font-bold">Project Details</h3>
					<p>
						<strong>Description:</strong> This project aims to improve the Kiwix
						YouTube Scraper by enhancing the user interface for YouTube ZIMs.
						The goal is to create a more visually appealing and user-friendly
						design, making educational videos and other content more accessible
						for Kiwix users worldwide.
					</p>
					<p>
						<strong>GitHub Repository:</strong>{" "}
						<Link href="https://github.com/openzim/youtube">
							https://github.com/openzim/youtube
						</Link>
					</p>
					{/* <figure className="lg:-mx-12 xl:-mx-20">
						<img
							src="banner.jpeg"
							alt="Cover image"
							// width={1250}
							// height={340}
							className="aspect-video overflow-hidden rounded-lg object-cover"
						/>
						<figcaption className="text-center">
							Image caption goes here
						</figcaption>
					</figure> */}

					<h3 className="text-2xl font-bold">Screenshots</h3>
					<p>
						Move the slider to see the before and after screenshots of the Kiwix
						YouTube UI.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{BEFORE_AFTER_IMAGES.map((image, index) => (
							<div key={index}>
								<div className="grid grid-cols-2 text-xs font-light mb-2 text-gray-500">
									<span>New UI</span>
									<span className="text-right">Old UI</span>
								</div>
								<div>
									<ReactBeforeSliderComponent
										firstImage={image.before}
										secondImage={image.after}
										delimiterColor="#0f172a"
										delimiterIconStyles={delimiterIconStyles}
									/>
									<figcaption className="text-center text-sm mt-1">
										{image.caption}
									</figcaption>
								</div>
							</div>
						))}
					</div>

					{/* <h3 className="text-2xl font-bold">View ZIMs</h3>
					<p>
						Here are some of the ZIM files created during the project. Have a
						look and explore the content!
					</p>
					<div>
						<Carousel
							opts={{
								align: "start",
								loop: true,
							}}
						>
							<CarouselContent>
								{ZIM_FILES.map((file, index) => (
									<CarouselItem key={index} className="basis-full md:basis-1/3">
										<a href={file.url} target="_blank" rel="noreferrer">
											<Card>
												<CardContent className="flex flex-col items-center justify-center p-4">
													<img
														src={`zim_imgs/${file.thumbnail}`}
														alt={file.title}
														className="w-full object-cover rounded-lg"
													/>
													<h4 className="text-lg font-semibold mt-4">
														{file.title}
													</h4>
												</CardContent>
											</Card>
										</a>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div> */}
				</article>
			</main>
		</div>
	);
}
