import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Header from "./components/Header";
// import { ChakraProvider } from "@chakra-ui/react";
import ThemeProvider from "./components/ThemeProvider";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rong YU",
	description: "This is Rong YU's personel website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} w-auto md:max-w-3xl m-auto`}>
				<ThemeProvider>
					<Header></Header>
					<main className="md:max-w-2xl md:m-auto mx-8">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
