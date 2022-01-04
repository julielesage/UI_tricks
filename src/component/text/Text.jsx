import React from "react";
import './text.scss';

const Text = () => {
	return (
		<div>
			<div className="full-width">
				<h4>ELLIPSIS</h4>
				<p className="ellipsis">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet velit gravida odio ornare ultrices eu vitae elit. Suspendisse venenatis orci sed libero malesuada semper. Morbi et libero non purus faucibus elementum sed ut est. Cras volutpat at elit quis sagittis.
				</p>
				<br />
				<h4>TYPEWRITER ANIMATION</h4>

				<div className="typing-body"><p className="typewriter">This is a typewriter effect!</p></div>

			</div>
		</div>
	);
};

export default Text;