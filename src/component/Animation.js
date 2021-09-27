const Animation = ({ title, content }) => {
	return (
		<div className="cart">
			<div className="title">
				<h2 className="color_white">{title}</h2>
			</div>
			<div className={`demo ${title === "NEUMORPHIC LIGHT SWITCH" && 'switch'}`}>
				{content}
			</div>
		</div>
	);
};

export default Animation;