import "./App.css";
import Header from './component/header/Header';
import Animation from "./component/Animation";
import NeumorphicLightSwitch from "./component/neumorphicLightSwitch/NeumorphicLightSwitch";
import Rotation from './component/rotation/Rotation';
import Triangle3DSpin from './component/triangle3Dspin/Triangle3DSprin';

function App() {
	return (
		<>
			<Header />
			<div className="flex-wrap p-t_60">


				<Animation title="NEUMORPHIC LIGHT SWITCH" content={<NeumorphicLightSwitch />} />
				<Animation title="TRIANGLE 3D SPIN" content={<Triangle3DSpin />} />



				<Animation title="LINEAR ROTATION" content={<Rotation />} />
			</div>
		</>
	);
}



export default App;
