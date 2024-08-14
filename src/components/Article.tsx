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
import { Button } from "./ui/button";
import { ExternalLink, GitPullRequestArrow } from "lucide-react";
import { CodeBlock, atomOneDark as codeBlockTheme } from "react-code-blocks";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React from "react";

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

	const [open, setOpen] = React.useState(false);
	const [index, setIndex] = React.useState(-1);

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
							<div>August 14, 2024</div>
						</div>
					</div>
					<div className="mt-4">
						<a
							href="https://summerofcode.withgoogle.com/programs/2024/projects/Zkus2foO"
							target="_blank"
							rel="noreferrer"
						>
							<Button
								size="sm"
								variant="secondary"
								className="py-0 rounded-2xl d-flex items-center justify-center"
							>
								<img src="gsoc.png" alt="GSoC Page" className="w-4 h-4 mr-2" />
								GSoC Page
								<ExternalLink className="ml-2 w-3" />
							</Button>
						</a>
						<a
							href="https://github.com/openzim/youtube"
							target="_blank"
							rel="noreferrer"
						>
							<Button
								size="sm"
								variant="secondary"
								className="py-0 rounded-2xl d-flex items-center justify-center ml-2"
							>
								<img src="github.svg" alt="GitHub" className="w-4 h-4 mr-2" />
								GitHub Repository
								<ExternalLink className="ml-2 w-3" />
							</Button>
						</a>
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
					<h3 className="text-2xl font-bold">About Kiwix</h3>
					<p>
						<Link href="https://kiwix.org/">Kiwix</Link> is primarily an NGO
						dedicated to providing free and open access of knowledge to
						everyone. To achieve this, Kiwix offers free and open-source offline
						web browsing, allowing users to download content in the form of{" "}
						<Link href={"https://wiki.openzim.org/wiki/ZIM_file_format"}>
							ZIM
						</Link>{" "}
						files and access it through{" "}
						<Link href={"https://kiwix.org/en/applications/"}>
							reading apps
						</Link>{" "}
						for offline viewing.
					</p>
					<h3 className="text-2xl font-bold">Project Details</h3>
					<p>
						This project aims to improve the{" "}
						<Link href={"https://github.com/openzim/youtube"}>
							Kiwix YouTube Scraper
						</Link>
						, which is designed to create ZIMs from YouTube videos. By enhancing
						the user interface for YouTube ZIMs, the goal is to create a more
						visually appealing and user-friendly design, making educational
						videos and other content more accessible for Kiwix users worldwide.
					</p>

					<h3 className="text-2xl font-bold">Screenshots</h3>
					<p>
						Move the slider to see the before and after screenshots of the Kiwix
						YouTube UI.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2">
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
					<h3 className="text-2xl font-bold">Work Done</h3>
					<div className="flex md:flex-row flex-col items-center gap-2">
						<p>The merged pull requests for the project can be viewed here:</p>
						<a
							href="https://github.com/openzim/youtube/pulls?q=is%3Apr+author%3Adan-niles+is%3Amerged+"
							target="_blank"
							rel="noreferrer"
						>
							<Button
								size="sm"
								variant="default"
								className="py-0 rounded-2xl d-flex items-center justify-center"
							>
								<GitPullRequestArrow className="w-4 h-4 mr-2" />
								Merged PRs
								<ExternalLink className="ml-2 w-3" />
							</Button>
						</a>
					</div>
					<p>
						The task was a large 350-hour project to revamp the UI for the Kiwix
						YouTube Scraper. The scraper operates by taking a channel or
						playlist ID, scraping the content from the internet, and packaging
						it into a ZIM file - a format that essentially contains a mini
						website, accessible via Kiwix readers.
					</p>
					<p>
						Previously, the scraper used Jinja HTML templates to render each
						page of the YouTube channel. The goal of this revamp was to replace
						that approach with a Vue.js UI, offering a more user-friendly and
						minimal design.
					</p>
					<h3 className="text-lg font-bold">Modifying the Scraper - Python</h3>
					<p>
						Even though this project was a UI revamp, I spent a lot of time
						working in Python, modifying the scraper. I started by upgrading the
						scraper's dependencies to the latest versions, which helped me
						understand the codebase better. Then, I replaced the Jinja HTML
						templates with JSON files that store all the information about a
						scraped channel or playlist. These JSON files will be used by the
						new Vue.js UI.
					</p>
					<p>
						I defined a schema for the different objects (videos, playlists,
						channels) using Pydantic and used it to generate the necessary JSON
						files. For example, the JSON file for a single video looks like
						this:
					</p>
					<CodeBlock
						text={
							'{ \n\t"id": "jJSt1ZwCpCg", \n\t"title": "Resolve All Conflicts | Episode 02 | Twice as Wise | Season 01", \n\t"description": "-", \n\t"author": { \n\t\t"channelId": "UC-yXHUyLqMxx9fTlAeB0dQQ",\n\t\t"channelTitle": "Project FUEL", \n\t\t"channelDescription": "-",\n\t\t"channelJoinedDate": "2018-10-09T09:01:02Z",\n\t\t"profilePath": "channels/UC-yXHUyLqMxx9fTlAeB0dQQ/profile.jpg",\n\t\t"bannerPath": "channels/UC-yXHUyLqMxx9fTlAeB0dQQ/banner.jpg"\n\t},\n\t"publicationDate": "2013-10-06T06:28:55Z",\n\t"videoPath": "videos/jJSt1ZwCpCg/video.webm",\n\t"thumbnailPath": "videos/jJSt1ZwCpCg/video.webp", \n\t"subtitlePath": null,\n\t"subtitleList": [],\n\t"duration": "PT1M31S"\n}'
						}
						codeBlockStyle={{ fontSize: "0.5px" }}
						codeContainerStyle={{ fontSize: "0.8rem" }}
						customStyle={{
							borderRadius: "0.8rem",
							background: "#0f172a",
							color: "#e3e3e3",
						}}
						language={"javascript"}
						showLineNumbers={true}
						theme={codeBlockTheme}
					/>
					<h3 className="text-lg font-bold">Frontend - Vue.js (TypeScript)</h3>
					<p>
						Next, was building the actual UI. I used{" "}
						<Link href="https://vuetifyjs.com/en/">Vuetify</Link> as the
						component framework because it's based on{" "}
						<Link href="https://m3.material.io/">Google's Material Design</Link>
						, which I thought would give the interface a look and feel similar
						to YouTube. I used <Link href="https://videojs.com/">Video.js</Link>{" "}
						for video playback.
					</p>
					<p>There were 4 main pages that had to be built were:</p>
					<ol>
						<div className="grid grid-cols-1 md:grid-cols-6 gap-4">
							<div className="col-span-4">
								<li className="font-bold mb-2">1. Videos page</li>
								<p>
									This is the landing page of the ZIM file. Users can browse
									through the available videos and select one to watch. The
									layout closely resembles the landing page of an actual YouTube
									channel.
								</p>
							</div>
							<img
								src="ui/1.png"
								onClick={() => {
									setIndex(0);
									setOpen(true);
								}}
								className="rounded-lg border col-span-2 cursor-pointer"
							></img>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
							<div className="col-span-4">
								<li className="font-bold my-2">2. Playlists page</li>
								<p>
									This page displays all the available playlists in the ZIM
									file. It provides users with a quick overview of the
									playlists, allowing them to choose one to play. The layout is
									also similar to the playlists page on YouTube.
								</p>
							</div>
							<img
								src="ui/2.png"
								onClick={() => {
									setIndex(1);
									setOpen(true);
								}}
								className="rounded-lg border col-span-2 cursor-pointer"
							></img>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
							<div className="col-span-4">
								<li className="font-bold my-2">3. Playlist View page</li>
								<p>
									This page lists all the videos within a particular playlist.
									Users can click on the “View full playlist” link under a
									playlist on the Playlists Page and be redirected here.
								</p>
							</div>
							<img
								src="ui/3.png"
								onClick={() => {
									setIndex(2);
									setOpen(true);
								}}
								className="rounded-lg border col-span-2 cursor-pointer"
							></img>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
							<div className="col-span-4">
								<li className="font-bold my-2">4. Video Player page</li>
								<p>
									This is the page where users can watch videos. A playlist
									panel on the right lists all the videos, allowing users to
									select and switch between them as they like. The page also
									includes controls for looping and shuffling videos.
								</p>
							</div>
							<img
								src="ui/4.png"
								onClick={() => {
									setIndex(3);
									setOpen(true);
								}}
								className="rounded-lg border col-span-2 cursor-pointer"
							></img>
						</div>
					</ol>

					<h3 className="text-lg font-bold">Testing - pytest, Cypress</h3>
					<p>
						To ensure the new UI works as expected, I wrote tests for the
						scraper and the UI. I wrote end to end tests for the scraper using
						pytest and integration Tests for the UI using Cypress.
					</p>

					<Lightbox
						open={open}
						close={() => setOpen(false)}
						index={index}
						controller={{ closeOnBackdropClick: true }}
						slides={[
							{
								src: "ui/1.png",
								alt: "Videos Page",
								width: 2880,
								height: 1630,
							},
							{
								src: "ui/2.png",
								alt: "Playlists Page",
								width: 2880,
								height: 1630,
							},
							{
								src: "ui/3.png",
								alt: "Playlist View Page",
								width: 2880,
								height: 1630,
							},
							{
								src: "ui/4.png",
								alt: "Video Player Page",
								width: 2880,
								height: 1630,
							},
						]}
					/>

					<h3 className="text-2xl font-bold">Challenges</h3>
					<p>
						The biggest challenge I faced during the project was ensuring the
						new UI worked on older browsers. To make sure video (webm) playback
						was supported on older versions of Safari, I had to set up{" "}
						<Link href="https://github.com/bvibber/ogv.js">ogv.js</Link> as a
						fallback for Video.js. The thumbnails in the ZIM were in webp
						format, so I had to add polyfills for browsers that don't support
						webp.
					</p>

					<h3 className="text-2xl font-bold">Current State</h3>
					<p>
						A new major version (
						<Link href="https://github.com/openzim/youtube/releases/tag/v3.0.0">
							v3.0.0
						</Link>
						) of the scraper has been released, which includes the new UI. The
						scraper is now capable of scraping a channel or playlist and
						packaging it into a ZIM file with the new Vue.js UI.
					</p>
					<p>
						To experience this, you can download a reader from{" "}
						<Link href="https://kiwix.org/en/applications/">
							Kiwix Applications
						</Link>{" "}
						or use the online version at{" "}
						<Link href="http://pwa.kiwix.org/">pwa.kiwix.org</Link>. You can
						also download an updated YouTube ZIM file, such as{" "}
						<Link href="https://library.kiwix.org/viewer#project-fuel_en">
							Project Fuel
						</Link>
						, or preview it online at the Kiwix Library.
					</p>

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

					<h3 className="text-2xl font-bold">Future Work</h3>
					<p>
						Looking ahead, there are plans for a{" "}
						<Link href="https://github.com/openzim/youtube/milestone/6">
							v3.1.0
						</Link>{" "}
						release that will include various enhancements and bug fixes.
						Additionally, the project has a{" "}
						<Link href="https://github.com/openzim/youtube/milestone/8">
							backlog
						</Link>{" "}
						of ideas for future development.
					</p>

					<h3 className="text-2xl font-bold">Acknowledgements</h3>
					<p>
						A very special thanks to my mentor, Benoît Béraud (
						<Link href="https://github.com/benoit74">benoit74</Link>) for his
						guidance and support throughout this project. It was a great
						experience working with him, and I learned a lot from his feedback
						and advice.
					</p>
				</article>
			</main>
		</div>
	);
}
