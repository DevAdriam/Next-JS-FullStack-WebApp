import Image from "next/image";
import Link from "next/link";

// footer images import
import facebook from "../../public/1.png";
import instagram from "../../public/2.png";
import twitter from "../../public/3.png";
import youtube from "../../public/4.png";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="w-full px-5 flex flex-col md:flex-row md:justify-between justify-center  items-center ">
			<div className=" text-sm text-gray-100/80">@{currentYear} developed.All rights served</div>
			<ul className="flex items-center justify-between gap-3 mt-3 sm:mt-0">
				<li>
					<Link href="/">
						<Image src={facebook} width={20} height={20} alt="socials" />
					</Link>
				</li>

				<li>
					<Link href="/">
						<Image src={instagram} width={20} height={20} alt="socials" />
					</Link>
				</li>

				<li>
					<Link href="/">
						<Image src={twitter} width={20} height={20} alt="socials" />
					</Link>
				</li>

				<li>
					<Link href="/">
						<Image src={youtube} width={20} height={20} alt="socials" />
					</Link>
				</li>
			</ul>
		</footer>
	);
}
