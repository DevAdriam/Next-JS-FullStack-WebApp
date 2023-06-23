import React from "react";

type children = {
	children: React.ReactNode;
};

export default function CategoryHome({ children }: children) {
	return (
		<div className="w-full h-full text-gray-200 py-14 px-10 lg:px-0">
			{/* title */}
			<h1 className="text-6xl font-bold py-10 text-center lg:text-start">Our Works</h1>
			{children}
		</div>
	);
}
