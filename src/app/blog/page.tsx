import { getCategoryData } from "../../../libs/getCategoryData";
import Image from "next/image";

export default function Blog() {
	const applicationArr = getCategoryData("applications");
	const websitesArr = getCategoryData("websites");
	const illustrationsArr = getCategoryData("illustrations");
	console.log(applicationArr);

	const sumArrs = [...applicationArr, ...websitesArr, ...illustrationsArr];

	let content = sumArrs.map((blog) => {
		return (
			<article className="w-full flex justify-between lg:flex-row flex-col items-center md:items-start gap-10 py-5 my-5">
				<figure className="min-w-[350px] overflow-hidden  ">
					<Image
						src={blog.image}
						width={500}
						height={500}
						alt={blog.title}
						className="w-full h-full object-cover"
					/>
				</figure>

				<div>
					<h1 className="font-bold text-3xl text-gray-300 mb-5">{blog.title}</h1>
					<p className="text-gray-400 text-md">{blog.desc}</p>
				</div>
			</article>
		);
	});

	return content;
}
