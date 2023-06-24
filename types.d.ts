type Item = {
	id: number;
	title: string;
	desc: string;
	image: string;
};

type Items = {
	[category: string]: Item[];
};

type BlogPost = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};
