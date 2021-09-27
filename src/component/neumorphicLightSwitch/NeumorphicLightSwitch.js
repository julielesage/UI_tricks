import React, { useState, useEffect } from "react";
import './neumorphicLightSwitch.scss';

const NeumorphicLightSwitch = () => {
	const SWITCH_LIGHT_MIN = 40;
	const SWITCH_LIGHT_MAX = 100;
	const THUMB_HUE_MIN = 0;
	const THUMB_HUE_MAX = 120;
	const THUMB_SAT = 90.4;
	const THUMB_LIGHT = 44.9;
	const [value, setValue] = useState(100);
	const [pct, setPct] = useState(1);
	const [L, setL] = useState([100, 90, 63]);
	const [thumbHue, setThumbHue] = useState(12000);
	const thumbHSL = `${thumbHue}, ${THUMB_SAT}%,${THUMB_LIGHT}%`;
	const switchBody = document.querySelector('.switch-light');
	console.log("vALUE =>", value);
	// update the slider shade
	const updateIt = () => {
		L.forEach((light, i) => {
			console.log("updating", light, thumbHSL, switchBody);
			if (light < 0)
				light = 0;
			switchBody?.style.setProperty(`--l${i + 1}`, `hsl(228,9.8%,${light}%)`);
		});
		// update the thumb icon hue
		switchBody?.style.setProperty(`--p`, `hsl(${thumbHSL})`);
		switchBody?.style.setProperty(`--pT`, `hsla(${thumbHSL},0)`);
	}

	useEffect(() => {
		setTimeout(() => updateIt(), 5000);
	}, [])


	const ajustSlider = (e) => {
		const target = e.target || e;
		setValue(+target.value);
		setPct(+target.value / +target.max);
		setL([pct * (SWITCH_LIGHT_MAX - SWITCH_LIGHT_MIN) + SWITCH_LIGHT_MIN, L[0] - 10, L[0] - 37]);
		setThumbHue(pct * (THUMB_HUE_MAX - THUMB_HUE_MIN) + THUMB_HUE_MIN);
		updateIt();
	}

	const style = {
		"--l1": "hsl(228, 9.8%, 99.4%)"
	}

	return (
		<div>
			<form className="switch-light" style={style}>
				<input type="range" id="brightness" name="brightness"
					min="1" max="100" value={value}
					onChange={ajustSlider}
				/>
				<label>Brightness</label>
			</form>
		</div>
	);
};

export default NeumorphicLightSwitch;