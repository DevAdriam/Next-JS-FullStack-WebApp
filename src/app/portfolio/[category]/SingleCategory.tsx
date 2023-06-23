import Image from "next/image";

type Props = {
	category_data: Item;
};

export default function SingleCategory({ category_data }: Props) {
	//for flex-row-revers
	const getEvenId = category_data.id % 2 === 0;

	return (
		<section
			className={`w-full my-5 py-5 md:flex grid justify-center items-center ${
				getEvenId && "md:flex-row-reverse"
			} gap-10 `}
		>
			<article className="lg:w-[50%] w-full">
				<h1 className="text-3xl capitalize font-bold text-gray-300/90 py-4">{category_data.title}</h1>
				<p className="text-md text-gray-400 py-5">{category_data.desc}</p>
				<button className="py-2 px-3 bg-green-400 hover:bg-green-500/90 rounded-xl">See More</button>
			</article>

			<figure className="lg:w-[50%] w-full">
				<Image src={category_data.image} width={400} height={400} alt="cate1" loading="lazy" />
			</figure>
		</section>
	);
}
