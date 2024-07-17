import React from "react";
import {Button} from "@nextui-org/react";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function WaitList() {
  return (
    <section>
      <NavBar />
      <div className="flex flex-col mt-10">
        <div className="lg:text-[64px] text-[34px] mx-auto text-[#FFA500] font-bold rounded-lg px-5 bg-[#FFF2DB] w-[68%] lg:w-[40%]">Join Our Wait List</div>
        <p className="mx-auto w-60 md:w-full text-gray-500 text-center mt-2">Be among the first Persons to use gartekcloude when it Launches!</p>
      </div>
      <div className="mx-4">
        <div className="flex p-[1px] border-2 flex-row mt-10 md:w-[50%] justify-between mx-auto h-12 rounded-lg grow border-[#fcfbfa]">
          <input type="text" className="outline-none rounded-s-lg w-full bg-gray-100 h-full" placeholder={`Search for gartekcloude`} />
          <Button className="bg-[#FFA500] w-32 text-white h-full rounded-md">Join Waitlist</Button>  
        </div>
      </div>
      <div className="mt-24">
        <img src="globe.jpg" alt="globe"/>
      </div>
      <Footer />
    </section>
  )
}
