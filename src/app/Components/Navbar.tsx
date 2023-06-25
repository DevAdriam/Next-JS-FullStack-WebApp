"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./button";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [nav, Setnav] = useState(false);
	const pathName = usePathname();

	console.log(pathName);

	const navMenuArr = [
		{
			id: 1,
			link: "/",
			menu: "Home",
		},
		{
			id: 2,
			link: "/about",
			menu: "About",
		},
		{
			id: 3,
			link: "/portfolio",
			menu: "Portfolio",
		},
		{
			id: 4,
			link: "/blog",
			menu: "Blog",
		},
		{
			id: 5,
			link: "/contact",
			menu: "Contact",
		},
		{
			id: 6,
			link: "/dashboard",
			menu: "Dashboard",
		},
	];

	return (
		<nav className="bg-green-300/70 w-full fixed z-20 top-0 left-0 border-b border-gray-600">
			<div className="max-w-screen-xl flex justify-between items-center flex-wrap mx-auto md:py-0 py-3 px-10">
				<Link href="/">
					<span className="self-center text-2xl text-white/90 font-semibold whitespace-nowrap">hericet </span>
				</Link>
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
				<div
					className={`w-full md:w-auto ${
						!nav && "hidden"
					} md:flex justify-between items-center md:order-1 transition-all duration-500`}
				>
					<ul className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 ">
						{navMenuArr.map((menu) => {
							return (
								<li className="block w-full py-4 md:py-2 px-4 hover:underline underline-offset-4  hover:text-black hover:md:bg-transparent hover:bg-stone-200/70 ">
									<Link href={menu.link} onClick={() => Setnav(false)}>
										{menu.menu}
									</Link>
								</li>
							);
						})}
					</ul>

					<Button text="Log out" link="/" />
				</div>
			</div>
		</nav>
	);
}
