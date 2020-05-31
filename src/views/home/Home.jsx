import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "./../../components/home-header/HomeHeader";
import HomeSection from "../../components/home-sections/HomeSection";
import HomeImage1 from "./../../assets/images/home-image-1.png";
import HomeImage2 from "./../../assets/images/home-image-2.png";
import HomeImage3 from "./../../assets/images/home-image-3.png";

function Home() {
	return (
		<div>
			<HomeHeader />
			<HomeSection image={HomeImage1} center>
				<div className="flex flex-col align-middle justify-center text-center">
					<Link to="/signin">
						<div className="bg-green-400 py-5 px-24 text-3xl cursor-pointer">
							Login or sign up
						</div>
					</Link>
				</div>
			</HomeSection>
			<HomeSection image={HomeImage2}>
				<div className="p-12">
					<div className="text-5xl">About</div>
				</div>
			</HomeSection>
			<HomeSection image={HomeImage3}>
				<div className="p-12">
					<div className="text-5xl">News</div>
				</div>
			</HomeSection>
		</div>
	);
}

export default Home;
