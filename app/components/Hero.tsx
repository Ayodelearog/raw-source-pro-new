import Image from "next/image";
import MainButton from "./MainButton";

const Hero = () => {
	return (
		<div className="relative h-[96vh] px-[100px] flex flex-col justify-center">
			<div className="absolute inset-0">
				<Image
					src="/hero-image.jpeg"
					alt="Construction worker"
					fill={true}
					priority
					className="object-cover object-[center_45%]"
				/>
			</div>
			<div className="relative max-w-7xl mr-auto px-4 sm:px-6 lg:px-8">
				<div className=" mx-auto text-left mt-24">
					<h1 className="text-[72px] leading-[86px] text-left font-display font-bold text-white">
						YOUR TRUSTED PARTNER FOR QUALITY <br /> CONSTRUCTION MATERIALS
					</h1>

					<MainButton label="Explore Our Products" className="mt-10" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
