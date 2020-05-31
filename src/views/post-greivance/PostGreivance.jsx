import React from "react";

function PostGreivance() {
	return (
		<div className="flex flex-col w-100">
			<div className="text-4xl">Post your greivance</div>
			<div className="flex w-100 mt-5">
				<input
					style={{
						border: "0.5px solid grey",
						width: "100%",
						textAlign: "center",
					}}
					className="py-4"
					type="text"
					name="category"
					id="category-input"
					placeholder="Greivance category"
				/>
			</div>
			<div className="flex my-5 w-100">
				<input
					style={{
						border: "0.5px solid grey",
						width: "100%",
						textAlign: "center",
					}}
					type="help"
					className="py-4"
					name="help"
					id="help-input"
					placeholder="Who can help in solving this?"
				/>
			</div>
			<textarea
				style={{ border: "0.5px solid grey", textAlign: "center" }}
				name="body"
				id="body"
				className="py-4"
				cols="30"
				rows="10"
				placeholder="writeup about greivance"
			></textarea>
		</div>
	);
}

export default PostGreivance;
