import React from "react";
import './cursor.css';

const Cursors = () => {
	return (
		<div className="column">
			<div className="flex-wrap space-evenly margin-100">
				<div className="cursor-pointer square">Pointer</div>
				<div className="cursor-waiting square">Waiting...</div>
				<div className="cursor-help square"><p>Help</p></div>
				<div className="cursor-crosshair square">Crosshair</div>
				<div className="cursor-grab square">Grab</div>
				<div className="cursor-happy square">Happy</div>
				<div className="cursor-sad square">Sad</div>
			</div>
			<br />
			<div className="flex-wrap space-evenly">
				<div className="shape-triangle"></div>
				<div className="shape-circle"></div>
				<div className="shape-star"></div>
			</div>
		</div>
	);
};

export default Cursors;