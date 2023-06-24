type Props = {
	children: React.ReactNode;
};

export default function layout({ children }: Props) {
	return (
		<div className="lg:w-[80%] w-full mx-auto py-28 px-5">
			<h1 className="font-bold text-4xl text-green-400">Blogs</h1>
			{children}
		</div>
	);
}
