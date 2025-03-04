import type { Metadata } from "next";
import { Lato, Bebas_Neue } from "next/font/google";
import "./globals.css";

import type React from "react";


const lato = Lato({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-lato",
});

const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
	title: "Raw Source Pro",
	description: "Your trusted partner for quality construction materials",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${lato.variable} ${bebasNeue.variable} relative font-sans`}>
      {/* <div className="w-full h-full absolute top-0 left-0">
            <Image
              src="/hero-img.jpg"
              alt="Construction materials"
              fill={true}
              className="object-contain w-full h-full"
            />
          </div> */}
				{/* <Header /> */}
				{children}
			</body>
		</html>
	);
}
