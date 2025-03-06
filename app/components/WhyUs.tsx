import React from "react";
import Image from "next/image";

const WhyUs = () => {
	return (
		<section className="py-16 pt-[220px] px-4 md:px-16 bg-white">
			<div className="container mx-auto grid md:grid-cols-2 gap-[218PX] items-center">
				<div>
					<Image
						src="/why-choose-us.png"
						alt="Worker at construction site"
						width={475}
						height={512}
						className="w-full"
					/>
				</div>
				<div className="max-w-[612px] flex flex-col ">
					<h2 className="text-[40px] font-[400] leading-12 font-display mb-10">Why Choose Us?</h2>
					<p className="text-black text-[20px] leading-6 font-sans font-[500] mb-2.5">
						Choose Raw Source Pro for superior quality, unwavering reliability,
						and customer satisfaction.
					</p>
					<p className="text-black text-[20px] leading-6 font-sans font-[500] ">
						We source premium raw materials, ensure strict quality control and
						deliver on time. Your success is our priority.
					</p>
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
