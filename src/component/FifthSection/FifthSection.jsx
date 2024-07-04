import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FifthSectionScroll from "./FifthSectionScroll";


export default function FifthSection() {
  return (
    <section>
        <div className="bg-black pt-10">
            <div className="flex flex-row justify-between">
                <div>
                    <p className="text-white ml-32 text-5xl font-extrabold">Why <br /><span className="text-orange-400">Gartekcloude?</span></p>
                </div>
                <div className="hidden md:flex md:flex-col bg-orange-500 mr-32 w-28 h-28 text-white flex-col gap-3 px-10 py-4  rounded-[100%]">
                    <div className="items-center flex flex-col font-semibold justify-center">
                        <div>join</div>
                        <div>waitlist</div>
                    </div>
                    <span>
                        <img src="arrow-up.png" alt="arrow_img" srcset="" />
                    </span>
                </div>
            </div>
            <div className="pb-10">
                <FifthSectionScroll />
            </div>
        </div>
    </section>
  )
}
