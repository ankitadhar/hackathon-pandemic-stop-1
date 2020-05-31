import React from "react";
import HomeHeader from "../../components/home-header/HomeHeader";
import image1 from "./../../assets/images/category-1.png";
import image2 from "./../../assets/images/category-2.png";
import image3 from "./../../assets/images/category-3.png";
import image4 from "./../../assets/images/category-4.png";

function ViewGreivances() {
	return (
		<div>
			<HomeHeader />
			<div className="w-screen h-screen p-12">
				<div className="text-4xl text-center ">Select a category</div>
				<div class="grid grid-cols-3 gap-4">
					<div
						className="flex justify-center align-middle"
						style={{
							backgroundImage: `url(${image1})`,
							height: "300px",
							width: "100%",
							backgroundSize: "cover",
						}}
					>
						<div> Jobs</div>
					</div>
					<div>9</div>
				</div>
			</div>
		</div>
	);
}

export default ViewGreivances;
