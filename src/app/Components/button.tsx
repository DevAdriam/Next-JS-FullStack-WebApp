import Link from "next/link";

type Props = {
	text: string;
	link: string;
};
const Button = ({ text, link }: Props) => {
	return (
		<button className="font-bold py-2 px-4 rounded-xl bg-green-400 hover:bg-green-500">
			<Link href={link}>{text}</Link>
		</button>
	);
};

export default Button;
