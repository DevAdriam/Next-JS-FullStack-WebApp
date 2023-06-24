import "../Components/skeletons/Skeletons.css";
import SkeletonPost from "@/app/Components/skeletons/SkeletonsPost";
const LoadingSkeleton = () => {
	const content = Array.from({ length: 10 }).map((i) => {
		return <SkeletonPost />;
	});
	return content;
};

export default LoadingSkeleton;
