import { items } from "../api/categoryData";
import { notFound } from "next/navigation";

export const getCategoryData = (cat: string) => {
	const data = items[cat];
	if (!data) return notFound();
	return data;
};
