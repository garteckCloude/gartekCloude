import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ThirdInfinityScroll() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full overflow-hidden bg-black flex flex-col">
            <Slider {...settings} className="my-4">
                <div className="flex items-center justify-center h-10">
                    <img src="medicine.png" alt="medicine_img" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                    <img src="personalized.png" alt="personalized_img" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                    <img src="student.png" alt="student_img" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                    <img src="africa.png" alt="africa_img" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                    <img src="book.png" alt="book_img" className="max-w-full max-h-full object-contain" />
                </div>
            </Slider>
        </div>
    );
}
