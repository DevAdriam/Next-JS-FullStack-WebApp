import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Blog Website",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container overflow-x-hidden">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
