import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
	return (
		<section className="pt-[100px] px-20 md:px-16 bg-white">
			<div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
				<div className="max-w-[612px] flex flex-col gap-10">
					<h2 className="text-[40px] font-[400] leading-12 font-display p-2.5">Who We Are?</h2>
					<div className="p-2.5">
						<p className="text-black text-[20px] leading-6 font-sans font-[500] mb-2.5">
							Raw Source Pro is a trusted leader in the raw materials market,
							known for quality, reliability and sustainable sourcing.
						</p>
						<p className="text-black text-[20px] leading-6 font-sans font-[500] ">
            With strong industry experience and global partnerships, it
							ensures competitive pricing and consistent excellence.
						</p>
						
					</div>
				</div>
				<div className="md:pl-10">
					<Image
						src="/building-who-we-are.png"
						alt="Modern building architecture"
						width={500}
						height={512}
						className="w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
