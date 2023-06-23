import Image from "next/image";
import Link from "next/link";
export default function About() {
	return (
		<div className="w-full h-full py-14 px-10 lg:px-0 grid items-center ">
			<figure className="w-full lg:h-[350px] h-[300px] overflow-hidden bg-green-100 relative">
				<Image
					src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="about photo"
					width={800}
					height={800}
					className="w-full h-full grayscale object-cover object-bottom-left"
				/>

				<article className="w-[85%] sm:w-[50%] md:w-[40%] absolute md:bottom-6 dm:left-6 bottom-3 left-0 md:p-5 p-3 bg-green-400/90 text-gray-100 font-bold">
					<h1 className="text-xl ">Digital Storytellers</h1>
					<p className="text-sm">Handcrafting award winning digital experience</p>
				</article>
			</figure>

			<section className="flex justify-between gap-10 lg:flex-row flex-col text-gray-100/90">
				<article>
					<h1 className="text-3xl font-bold my-8">Who are we?</h1>
					<p className="text-gray-300/90 text-[16px] tracking-normal">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus
						magnam iure esse tempora beatae.
						<br />
						<br />
						A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
						beatae, a suscipit eos. Animi quibusdam cum omnis officiis
						<br />
						<br />
						voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
						dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
						officiis voluptatum quo ea eveniet?
					</p>
				</article>

				<article>
					<h1 className="text-3xl font-bold my-8">What we do?</h1>
					<p className="text-gray-300/90 text-[16px] tracking-normal">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus
						magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo
						ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. - Creative Illustrations
						<ul className="my-8">
							<li className="my-5"> - Dynamic Websites</li>
							<li className="my-5"> - Fast & Handy</li>
							<li className="my-5"> - Mobile Apps </li>
						</ul>
					</p>
					<button className="py-3 px-4 bg-green-400 hover:bg-green-500/90 rounded-xl">
						<Link href="/contact">Contact</Link>
					</button>
				</article>
			</section>
		</div>
	);
}
