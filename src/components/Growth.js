import React from "react";
import imgThree from "../assets/images/image-gaming-growth.jpg";

let h = 180;
let w = 200;

function Growth() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <img width={w} height={h} src={imgThree} alt="growth pandemic" />
          </div>
          <div class="col-sm">
            <p className="number">03 </p>

            <p className="second">
              <strong>The Growth of Gaming</strong>
            </p>
            <p className="description">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Growth;
