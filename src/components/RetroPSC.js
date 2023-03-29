import React from "react";
import imgOne from "../assets/images/image-retro-pcs.jpg";

let h = 170;
let w = 140;

function Retro() {
  return (
    <div className="main-box">
      <div className="container-fluid">
        <div className="row">
          <div class="col-sm">
            <img width={w} height={h} src={imgOne} alt="old pcs's" />
          </div>
          <div class="col-sm">
            <p className="number"> 01</p>
            <p className="second">
              <strong>Reviving Retro PCs</strong>
            </p>
            <p className="description">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retro;
