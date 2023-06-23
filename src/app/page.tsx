import Hero from "../../public/hero.png";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
	return (
		<main className="w-full h-max-content flex items-center justify-between md:flex-row flex-col px-10 py-20 lg:py-0 lg:px-0">
			<article className="lg:w-[60%] md:w-[80%] w-[100%] flex flex-col gap-10 lg:mr-14 ">
				<h1 className="title text-5xl font-bold leading-snug">Better design for your digital products</h1>
				<p>Turning your idea into Reality. We bring together the teams from the global tech industry.</p>

				<button className="w-[130px] py-3 px-1 bg-green-400 hover:bg-green-500/90 rounded-xl text-sm font-bold text-gray-100/90">
					<Link href="/portfolio">See our works</Link>
				</button>
			</article>

			<figure className="lg:py-0 py-10 ">
				<Image src={Hero} width={500} height={500} alt="hero section" />
			</figure>
		</main>
	);
}
