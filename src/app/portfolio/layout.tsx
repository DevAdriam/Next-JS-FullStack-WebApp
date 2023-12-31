import { Metadata } from "next";
import React from "react";

type children = {
	children: React.ReactNode;
};

export const metadata: Metadata = {
	title: "Portfolio",
	description: "our works",
};

export default function CategoryHome({ children }: children) {
	return (
		<div className="w-full lg:w-[80%] mx-auto h-full text-gray-200 py-14 px-10 lg:px-0">
			{/* title */}
			<h1 className="text-6xl font-bold py-10 text-center lg:text-start">Our Works</h1>
			{children}
		</div>
	);
}
