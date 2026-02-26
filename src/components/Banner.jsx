import React from "react";
import BannerImgon from "../assets/gcover (1).jpg";
import imgtwo from "../assets/gcover (2).jpg";
import imgthree from "../assets/gcover (3).jpg";
import imgfour from "../assets/gcover (4).jpg";
import imgfive from "../assets/gcover (5).jpg";
import imgsix from "../assets/gcover (6).jpg";
import imgseven from "../assets/gcover (7).jpg";
import imgeight from "../assets/gcover (8).jpg";


function Banner() {
  return (
    <div className="w-full">
      <div className="carousel w-full">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={BannerImgon} className="w-full h-[500px] object-cover" />
          <NavButtons prev="slide8" next="slide2" />
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={imgtwo} className="w-full h-[500px] object-cover" />
          <NavButtons prev="slide1" next="slide3" />
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={imgthree} className="w-full h-[500px] object-cover" />
          <NavButtons prev="slide2" next="slide4" />
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={imgfour} className="w-full h-[500px] object-cover" />
          <NavButtons prev="slide3" next="slide5" />
        </div>

        {/* Slide 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <img src={imgfive} className="w-full h-[500px] object-cover" />
          <NavButtons prev="slide4" next="slide6" />
        </div>

        {/* Slide 6 */}
        <div id="slide6" className="carousel-item relative w-full">
          <img src={imgsix} className="w-full h-[500px] object-cover" />
          <NavButtons prev="slide5" next="slide7" />
        </div>

        {/* Slide 7 */}
        <div id="slide7" className="carousel-item relative w-full">
          <img src={imgseven} className="w-full h-[500px] object-cover" />
          <NavButtons prev="slide6" next="slide8" />
        </div>

        {/* Slide 8 */}
        <div id="slide8" className="carousel-item relative w-full">
          <img src={imgeight} className="w-full h-[500px] object-cover" />
          <NavButtons prev="slide7" next="slide1" />
        </div>

      </div>
    </div>
  );
}

function NavButtons({ prev, next }) {
  return (
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href={`#${prev}`} className="btn btn-circle">❮</a>
      <a href={`#${next}`} className="btn btn-circle">❯</a>
    </div>
  );
}

export default Banner;