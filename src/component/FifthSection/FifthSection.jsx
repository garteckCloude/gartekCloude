import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FifthSectionScroll from "./FifthSectionScroll";

const data = [
    {  img:'teacher.png', 
       header: 'Centralized Course Materials', 
       text: 'Gartekcloude offers a well-organized repository of course materials for all academic levels and fields of study, ensuring students can easily find and access what they need.'
     },
    {  img:'people.png', 
       header: 'Personalized Learning Paths', 
       text: 'Our platform provides personalized study plans and recommendations, helping students optimize their learning based on their individual progress and needs.'
    },
    {  img:'teacher.png', 
       header: 'Vibrant Student Community', 
       text: 'Gartekcloude fosters a thriving academic community where students can connect, collaborate, and share knowledge, enhancing their Ed- experience through peer interaction.'
    },
    {  img:'teacher.png', 
       header: 'Real-Time Collaboration Tools', 
       text: 'We offer powerful real-time collaboration features, including live document editing and project management, making group work and study sessions more efficient and productive.'
    },
]

export default function FifthSection() {
  return (
    <section>
        <div className="bg-black pt-10 overflow-hidden">
            <div className="flex flex-row justify-between">
                <div>
                    <div>
                        <p className="text-white ml-10 text-5xl font-semibold">Why <br /><span className="text-orange-400">Gartekcloude?</span></p>
                    </div>
                    <div className="md:hidden mt-10 mx-5">
                        {
                            data.map(((d, i)=> (        
                                <div id={i} className="border-4 p-5 border-white h-full rounded-lg mt-5">
                                    <div>
                                        <img src={d.img} alt={d.img} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{d.header}</h4>
                                        <p className="text-gray-400">{d.text}</p>
                                    </div>
                                </div>
                            )))
                        }
                        <div className="md:flex md:flex-col bg-[#FFA500] mr-32 w-28 h-28 text-white flex-col flex justify-center mx-auto mt-16 gap-3 px-10 py-4  rounded-[100%]">
                            <div className="items-center flex flex-col font-semibold justify-center">
                                <div>join</div>
                                <div>waitlist</div>
                            </div>
                            <span className="bg-white rounded-full opacity-55">
                                <img src="arrow-up.png" alt="arrow_img" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex md:flex-col bg-[#FFA500] mr-32 w-28 h-28 text-white flex-col gap-3 px-10 py-4  rounded-[100%]">
                    <div className="items-center flex flex-col font-semibold justify-center">
                        <div>join</div>
                        <div>waitlist</div>
                    </div>
                    <span className="bg-white rounded-full opacity-55">
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
