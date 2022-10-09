import React from "react";
import './scannedBalls.scss';

const ScannedBalls = () => {
  return (
<div className="scanned-balls">
  <div className="outer">
    <div className="outer_scene">
      <div className="outer_floor"></div>
      <div className="balls">
        <div className="balli"></div>
        <div className="balli"></div>
        <div className="balli"></div>
        <div className="balli"></div>
      </div>
    </div>
  </div>

  <div className="portal">
  <div className="portal_scene">
    <div className="portal_floor"></div>

    <div className="cube">
      <div className="cube_shadow"></div>
      <div className="cube_body">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div className="cube">
      <div className="cube_shadow"></div>
      <div className="cube_body">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div className="cube">
      <div className="cube_shadow"></div>
      <div className="cube_body">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div className="cube">
      <div className="cube_shadow"></div>
      <div className="cube_body">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  </div>
</div>

  <div className="outer">
  <div className="outer_scene">
    <div className="balls">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <div className="balli"></div>
      <div className="balli"></div>
      <div className="balli"></div>
      <div className="balli"></div>
    </div>
  </div>
</div>

</div>
);
};

export default ScannedBalls;
