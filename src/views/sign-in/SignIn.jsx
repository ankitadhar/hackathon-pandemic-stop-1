import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo-icon-1.png";
import SignInImage from "./../../assets/images/sign-in-image-1.png";

function SignIn() {
	return (
		<div
			className="flex flex-col"
			style={{
				backgroundImage: `url(${SignInImage})`,
				backgroundPosition: "center center",
				backgroundSize: "cover",
				height: "100vh",
			}}
		>
			<div className="flex justify-center mt-10">
				<img src={logo} alt="logo" />
			</div>
			<div className="flex justify-center my-5">
				<input
					type="email"
					name="email"
					id="email-input"
					placeholder="Enter your Email"
				/>
			</div>
			<div className="flex justify-center">
				<input
					type="password"
					name="password"
					id="password-input"
					placeholder="Enter your Password"
				/>
			</div>
			<div className="flex justify-center mt-5">
				<Link to="/dashboard">
					<div className="bg-green-400 py-5 px-24 text-3xl cursor-pointer">
						Login
					</div>
				</Link>
			</div>
			<div className="flex justify-center my-5">
				<p>OR</p>
			</div>
			<div className="flex justify-center mb-5">
				<Link to="/signin">
					<div className="bg-green-400 py-5 px-24 text-3xl cursor-pointer">
						Sign up
					</div>
				</Link>
			</div>
		</div>
	);
}

export default SignIn;
