import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";


export default function Footer() {
  return (
    <section>
        <div className="mt-10 flex flex-col bg-[#FFA500] items-center justify-center">
            <div className="pt-10">
              <p className="font-bold text-2xl md:font-normal text-white">Be the first to know what happens at</p>
            </div>
            <div>
              <p  className="font-bold text-xl text-white md:font-normal">gartekcloude! Subscribe Now</p>
            </div>
            <div className=" flex flex-col items-center justify-center pt-10">
                <label className="input max-w-96 input-bordered px-7 rounded-lg flex bg-white items-center gap-2">
                    <input type="text" className="grow w-[442px] focus:outline-none h-[65px]" placeholder={`Search for gartekgcloud`} />
                    <button type="button" className="px-5 py-1 w-[90px] h-[40px] text-white rounded-lg bg-[#FFA500] opacity-70"><a href="../../../frontend/" target="_blank" rel="noopener noreferrer">Send</a></button>
                </label>
            </div>
          <div className="mt-5 text-white">
            <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
              <div><p>About</p></div>
              <div><p>FAQs</p></div>
              <div><p>Contact Us</p></div>
            </div>
            <div className="gap-5 mt-10 flex items-center justify-center">
              <span className="bg-white bg-opacity-40 p-2 rounded-full">
                <FaXTwitter />
              </span>
              <span className="bg-white bg-opacity-40 p-2 rounded-full">
                <FaLinkedin />
              </span>
            </div>
            <div className="mt-10">
              <img src="gartekcloud.png" className="w-[395px] h-[78px] md:w-[595px] md:h-[98px]" alt="gartekcloud" />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-5">
            <div>
              <FaRegCopyright className="text-white" />
            </div>
            <div>
              <p className="text-white">2024 Gartekcloude</p>
            </div>
          </div>
          
        </div>
    </section>
  )
}
