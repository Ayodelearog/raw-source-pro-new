import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="w-full absolute z-10 flex items-center justify-between mt-[40px] px-[100px] bg-black/10">
			<div>
				<Image
					src="/logo-white.png"
					alt="Company logo"
					width={244}
					height={40}
				/>
			</div>
			<nav>
				<ul className="flex items-center gap-10 text-[20px] leading-6 font-[600px] font-sans text-white">
					<Link href="#">About Us</Link>
					<Link href="#">Contacts</Link>
					<Link href="#">Blogs & News</Link>
				</ul>
			</nav>


			<div>
				<button className="px-[52px] py-4 text-[20px] leading-6 font-[600px] font-sans text-white border-2 hover:bg-rsp-green transition-colors duration-300 ease-in-out">
					Career
				</button>
			</div>
		</header>
	);
};

export default Header;
