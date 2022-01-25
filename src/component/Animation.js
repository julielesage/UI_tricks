const Animation = ({ title, content, double }) => {
	return (
		<div className={double ? "full-width cart" : "cart"}>
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