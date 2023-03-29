import webimage from "../assets/images/image-web-3-desktop.jpg";

function ImageWeb() {
  return (
    <div>
      <div>
        <img width={1000} height={400} src={webimage} alt="A Web 3"></img>
      </div>
      <div className="fte-conatiner">
        <div class="container ">
          <div class="row ">
            <div class="col-sm">
              <h1 class="future-head">
                <strong>The Bright Future of Web 3.0?</strong>
              </h1>
            </div>
            <div class="col-sm fte-conatiner">
              <p className="future-paragraph">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="btn-read">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageWeb;
