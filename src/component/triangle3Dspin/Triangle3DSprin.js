import React from "react";
import './Triangle3DSpin.css';

const Triangle3DSpin = () => {
	return (
		<div className="radial-gradient">
			<div className="wrapper">
				{[...Array(10)].map((x, i) =>
				(
					<div className={`triangle`} style={{ "--i": i }}>

					</div>
				)
				)}
			</div>
		</div>
	);
};

export default Triangle3DSpin;