import "./Skeletons.css";

const SkeletonPost = () => {
	return (
		<div className="w-full h-[500px] overflow-x-hidden lg:flex justify-between gap-10 items-start py-5 my-5 mx-auto">
			{/* skeleton image */}
			<div className="skeleton w-[500px] h-[300px] my-1"></div>

			<article>
				{/* skeleton title */}
				<div className="skeleton w-[250px] md:w-[450px] lg:w-[650px] h-[0.75rem] my-2 rounded-xl"></div>
				<div className="skeleton w-[200px] md:w-[400px] lg:w-[600px] h-[0.75rem] mb-10 mt-2 rounded-xl"></div>

				{/* skeleton body */}
				<div className="skeleton w-[200px] md:w-[400px] lg:w-[600px] h-[0.75rem] my-2 rounded-xl"></div>
				<div className="skeleton w-[200px] md:w-[400px] lg:w-[600px] h-[0.75rem] my-1 rounded-xl"></div>
				<div className="skeleton w-[150px] md:w-[300px] lg:w-[500px] h-[0.75rem] my-1 rounded-xl"></div>
			</article>
		</div>
	);
};
export default SkeletonPost;
