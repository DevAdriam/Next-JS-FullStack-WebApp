import { getCategoryData } from "../../../../libs/getCategoryData";
import SingleCategory from "./SingleCategory";

type Props = {
	params: {
		category: string;
	};
};

export default function Categories({ params: { category } }: Props) {
	const CategoryData: Item[] = getCategoryData(category);

	return (
		<div>
			<h1 className="text-3xl font-bold text-green-300">{category}</h1>
			{CategoryData.map((cate_data) => {
				return <SingleCategory category_data={cate_data} key={cate_data.id} />;
			})}
		</div>
	);
}
