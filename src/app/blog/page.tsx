import Image from "next/image";
import illustration from "../../../public/illustration.png";
import { getData } from "../../../libs/getBlogPosts";
import { Suspense } from "react";

import LoadingSkeleton from "./loading";

export default async function Blog() {
	const blogPosts: BlogPost[] = await getData();
	// const applicationArr = getCategoryData("applications");
	// const websitesArr = getCategoryData("websites");
	// const illustrationsArr = getCategoryData("illustrations");

	// const sumArrs = [...applicationArr, ...websitesArr, ...illustrationsArr];

	let content = blogPosts?.map((blog) => {
		return (
			<Suspense fallback={<LoadingSkeleton />}>
				<article className="w-full flex justify-between lg:flex-row flex-col items-center md:items-start gap-10 py-10 my-5">
					<figure className="min-w-[350px] overflow-hidden  ">
						<Image
							src={illustration}
							width={500}
							height={500}
							alt={blog.title}
							className="w-full h-full object-cover "
						/>
					</figure>

					<div>
						<h1 className="font-bold text-3xl text-gray-300 mb-5">{blog.title}</h1>
						<p className="text-gray-400 text-md">{blog.body}</p>
					</div>
				</article>
			</Suspense>
		);
	});

	return content;
}
