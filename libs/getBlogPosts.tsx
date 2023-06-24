export async function getData() {
	const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
		cache: "force-cache",
	});

	if (!data.ok) throw new Error("Failed to fetch data");

	return data.json();
}
