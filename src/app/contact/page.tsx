import Link from "next/link";
import Image from "next/image";
import contact from "../../../public/contact.png";

export default function Contact() {
	return (
		<div className="w-full lg:w-[80%] mx-auto h-full py-14 px-5">
			<header className="font-bold w-full py-10 text-center capitalize tracking-wide text-gray-200/90 text-4xl">
				Let's keep in touch
			</header>

			<section className="flex md:flex-row justify-between items-center flex-col py-10">
				<figure>
					<Image src={contact} width={400} height={400} alt="contact" />
				</figure>

				<form action="" className="w-full md:w-[50%] grid items-center px-5 py-4 lg:px-0 lg:py-0">
					<input
						type="text"
						placeholder="name"
						className="my-3 px-4 py-3 border border-gray-400 bg-transparent text-gray-200 "
					/>
					<input
						type="text"
						placeholder="email"
						className="my-3 px-4 py-3 border border-gray-400 bg-transparent text-gray-200 "
					/>
					<textarea
						name="message"
						id="message"
						placeholder="message"
						cols={30}
						rows={10}
						className="my-3 px-3 py-3 bg-transparent text-gray-200 border border-gray-400"
					/>

					<button className="w-[200px] my-3 py-3 px-4 bg-green-400 hover:bg-green-500/90 rounded-xl">
						<Link href="#">Send</Link>
					</button>
				</form>
			</section>
		</div>
	);
}
