import React from "react";
import imgtwo from "../assets/images/image-top-laptops.jpg";

let h = 180;
let w = 200;

function Laptops() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <img width={w} height={h} src={imgtwo} alt="best laptops" />
          </div>
          <div class="col-sm">
            <p className="number"> 02 </p>
            <p className="second">
              <strong>Top 10 Laptops of 2022</strong>{" "}
            </p>
            <p className="description">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptops;
