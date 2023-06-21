import Link from "next/link";
import Image from "next/image";
import logo from "../../public/free-blog-png-transparent-images-pikpng.png";
export default function Navbar() {
	return (
		<nav className="w-full flex justify-between items-center ">
			{/* For logo */}
			<h1 aria-label="Logo" className="text-2xl font-bold text-white">
				{/* <Image src={logo} alt="logo" width={150} height={150} /> */}
				<Link href="/">Logo</Link>
			</h1>

			<ul className="flex justify-between items-center gap-10">
				<li>
					<Link href="/" className="active">
						Home
					</Link>
				</li>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
				<li>
					<Link href="/dashboard">Dashboard</Link>
				</li>

				<button className="w-max-content py-2 px-6  bg-green-400 hover:bg-green-500/90 rounded-xl text-white/90 font-bold">
					Logout
				</button>
			</ul>
		</nav>
	);
}
