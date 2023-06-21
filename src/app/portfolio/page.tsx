import React from "react";
import Image from "next/image";

import Illustrations from "../../../public/illustration.png";
import Websites from "../../../public/websites.jpg";
import MobileApps from "../../../public/apps.jpg";

export default function Portfolio() {
	return (
		<div className="w-full h-full text-gray-200 py-10 px-10 lg:px-0">
			<h1 className="text-6xl font-bold py-10 text-center lg:text-start">Our Works</h1>
			<h5 className="text-xl font-bold py-5 text-center lg:text-start">Choose a gallery</h5>

			<section className="flex items-center sm:justify-start lg:justify-between justify-center gap-10 flex-wrap py-5 ">
				<figure className="min-w-[300px] w-[300px] h-[400px] relative border-4 rounded-xl overflow-hidden border-gray-300 hover:text-green-500">
					<Image
						src={Illustrations}
						width={500}
						height={500}
						alt="illustrations"
						className="w-full h-full object-cover grayscale hover:grayscale-0  hover:scale-125 transition-all duration-500"
					/>
					<h1 className="absolute bottom-5 right-3  text-3xl font-bold transition-colors duration-300">
						Illustrations
					</h1>
				</figure>
				<figure className="min-w-[300px] w-[300px] h-[400px] relative border-4 rounded-xl overflow-hidden  border-gray-300 hover:text-green-400">
					<Image
						src={Websites}
						width={500}
						height={500}
						alt="websites"
						className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500"
					/>
					<h1 className="absolute bottom-5 right-3  text-3xl font-bold transition-colors duration-300">
						Websites
					</h1>
				</figure>
				<figure className="min-w-[300px] w-[300px] h-[400px] relative border-4 rounded-xl overflow-hidden border-gray-300 hover:text-green-400">
					<Image
						src={MobileApps}
						width={500}
						height={500}
						alt="mobileApps"
						className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-125 transition-all duration-500"
					/>
					<h1 className="absolute bottom-5 right-3  text-3xl font-bold transition-colors duration-300">
						Mobile Apps
					</h1>
				</figure>
			</section>
		</div>
	);
}
