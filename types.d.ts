type Item = {
	id: number;
	title: string;
	desc: string;
	image: string;
};

type Items = {
	[category: string]: Item[];
};
