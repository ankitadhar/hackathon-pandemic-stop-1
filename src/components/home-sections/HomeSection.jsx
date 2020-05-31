import React from "react";

function HomeSection(props) {
	return (
		<div
			class={
				props.center
					? "bg-scroll flex flex-row justify-center"
					: "bg-scroll flex flex-row"
			}
			style={{
				backgroundImage: `url(${props.image})`,
				height: "400px",
				backgroundPosition: "center center",
				backgroundSize: "cover",
			}}
		>
			{props.children}
		</div>
	);
}

export default HomeSection;
