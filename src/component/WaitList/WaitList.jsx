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
        <p className="mx-auto w-60 text-center mt-2">Be among the first Persons to use gartekcloude when it Launches!</p>
        <div>
          <div className=" flex flex-col items-center justify-center pt-12">
            <label className="input max-w-96 px-7 rounded-lg flex bg-white items-center">
              <input type="text" className="grow border border-[#FFA500] outline-none rounded-s-lg w-80 h-10" placeholder={`Search for gartekgcloud`} />
              <Button className="bg-[#FFA500] w-32 text-white rounded-e-lg">join waitlist</Button>  
            </label>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <img src="globe.jpg" alt="globe" srcset="" />
      </div>
      <Footer />
    </section>
  )
}
