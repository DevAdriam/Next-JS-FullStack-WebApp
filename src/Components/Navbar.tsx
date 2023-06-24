"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [nav, Setnav] = useState(false);

	return (
		<nav className="w-full flex justify-between items-center flex-row fixed z-10 top-0 px-10 py-5  bg-green-400/70 ">
			{/* For logo */}
			<h1 aria-label="Logo" className="w-[30%] text-2xl font-bold text-white ">
				{/* <Image src={logo} alt="logo" width={150} height={150} /> */}
				<Link href="/">Logo</Link>
			</h1>

			<ul
				className={`px-10 py-5 w-full md:py-0 bg-green-400/90 md:bg-transparent flex justify-between md:flex-row flex-col absolute md:static top-[80px] ${
					nav ? "left-0" : "left-[1000px]"
				} z-10 transition-all duration-500 items-start md:items-center gap-5 lg:gap-10`}
			>
				<li className="py-2 md:py-0 " onClick={() => Setnav(false)}>
					<Link href="/" className="active">
						Home
					</Link>
				</li>
				<li className="py-2  md:py-0 " onClick={() => Setnav(false)}>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li className="py-2  md:py-0 " onClick={() => Setnav(false)}>
					<Link href="/blog">Blog</Link>
				</li>
				<li className="py-2  md:py-0 " onClick={() => Setnav(false)}>
					<Link href="/about">About</Link>
				</li>
				<li className="py-2  md:py-0 " onClick={() => Setnav(false)}>
					<Link href="/contact">Contact</Link>
				</li>
				<li className="py-2  md:py-0 " onClick={() => Setnav(false)}>
					<Link href="/dashboard">Dashboard</Link>
				</li>

				<button className="w-max-content py-2 px-6  bg-green-400 hover:bg-green-500/90 rounded-xl text-white/90 font-bold">
					Logout
				</button>
			</ul>

			{/* Hamburger button */}
			<button className="flex md:hidden flex-col " onClick={() => Setnav(!nav)}>
				<span
					className={`w-[25px] h-[2px] mt-1 bg-white transition-all duration-400 ${nav && "rotate-[45deg] "}`}
				></span>
				<span className={`w-[25px] h-[2px] mt-1 bg-white transition-all duration-400 ${nav && "hidden"}`}></span>
				<span
					className={`w-[25px] h-[2px] mt-1 bg-white transition-all duration-400 ${
						nav && "rotate-[310deg] translate-y-[-5px]"
					}`}
				></span>
			</button>
		</nav>
	);
}
