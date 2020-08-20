import React from "react";

const Album = (props) => {
	return (
		<div
			className={`task${props.album.listened ? "listened" : ""}`}
			onClick={() => props.toggleTask(props.album.id)}
		>
			<h2>To Hear: {props.album.task}</h2>
		</div>
	);
};

export default Album;
