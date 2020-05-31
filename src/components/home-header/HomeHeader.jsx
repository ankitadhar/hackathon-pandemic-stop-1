import React from "react";
import logo from "./../../assets/images/logo-icon-1.png";

function HomeHeader() {
	return (
		<div>
			<div className="w-100 flex bg-green-500 h-20 justify-between">
				<img src={logo} alt="logo" width="10%" />
				<div className="text-4xl px-20">Greviances</div>
			</div>
		</div>
	);
}

export default HomeHeader;
