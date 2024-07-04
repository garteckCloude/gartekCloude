import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FifthSectionScroll() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
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
        <section>
            <div className="w-full overflow-hidden bg-black gap-10 hidden md:flex md:flex-col">
                <Slider {...settings} className="mt-10 ">
                    <div className="border-4 border-white h-44 gap-96 rounded-lg">
                        <div></div>
                        <div className="text-white py-5 px-5 h-full">
                            <div className="mb-5">
                                <h2 className="text-2xl font-bold">Centralized Course Materials</h2>
                            </div>
                            <div>
                                <p>
                                    Gartekcloude offers a well-organized repository of course materials for 
                                    all academic levels and fields of study, ensuring students can easily 
                                    find and access what they need.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-white h-44 rounded-lg">
                        <div></div>
                        <div className="text-white font-bold py-5 px-5">
                            <div className="mb-5">
                                <h2 className="text-2xl">Personalized Learning Paths</h2>
                            </div>
                            <div>
                                <p>
                                    Our platform provides personalized study plans and recommendations,
                                    helping students optimize their learning based on their individual progress and needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-white h-44 rounded-lg">
                        <div></div>
                        <div className="text-white font-bold py-5 px-5">
                            <div className="mb-5">
                                <h2 className="text-2xl">Vibrant Student Community</h2>
                            </div>
                            <div>
                                <p>
                                    Gartekcloude fosters a thriving academic community where students can connect, 
                                    collaborate, and share knowledge, enhancing their Ed- experience through peer interaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-white h-44 rounded-lg">
                        <div></div>
                        <div className="text-white font-bold py-5 px-5 h-fit">
                            <div className="mb-5">
                                <h2 className="text-2xl">Real-Time Collaboration Tools</h2>
                            </div>
                            <div>
                                <p>
                                    We offer powerful real-time collaboration features, 
                                    including live document editing and project management, 
                                    making group work and study sessions more efficient and productive.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}
