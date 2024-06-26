import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import BootstrapClient from "./components/Bootstrap";
import Navbar from "./components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
	title: "Corso",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				{children}
				<BootstrapClient />
			</body>
		</html>
	);
}
