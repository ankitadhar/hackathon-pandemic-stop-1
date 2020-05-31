import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import PostGreivance from "../post-greivance/PostGreivance";
import ViewGreivances from "../view-greivances/ViewGreivances";

function GrevianceSection() {
	return (
		<div className="flex h-screen w-screen">
			<div className="bg-black text-white h-100 w-1/4 flex flex-col align-middle text-center justify-around">
				<Link to="/dashboard/post">
					<div className="text-4xl cursor-pointer hover:bg-white hover:text-black py-4 mx-3">
						Post a grievance
					</div>
				</Link>
				<div className="text-4xl cursor-pointer hover:bg-white hover:text-black py-4 mx-3">
					Profile
				</div>
				<Link to="/view-all">
					<div className="text-4xl cursor-pointer hover:bg-white hover:text-black py-4 mx-3">
						View all grievances
					</div>
				</Link>
				<div className="text-4xl cursor-pointer hover:bg-white hover:text-black py-4 mx-3">
					Log out
				</div>
			</div>
			<div className="bg-white p-20 w-3/4">
				<Route
					exact
					path="/dashboard/post"
					component={PostGreivance}
				></Route>
			</div>
		</div>
	);
}

export default GrevianceSection;
