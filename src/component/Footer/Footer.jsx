import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";


export default function Footer() {
  return (
    <section>
       <div className="mt-10 flex flex-col bg-opacity-95 bg-[#FFA500] justify-center">
        <div className="flex flex-col items-center">
          <div className="font-bold pt-10 text-2xl md:font-normal text-white">
              <p>Be the first to know what happens at</p>
          </div>
          <div className="font-bold text-2xl text-white md:font-normal">
              <p>gartekcloude! Subscribe Now</p>
          </div>
          <div className=" flex flex-row bg-white h-10 w-[60%] lg:w-[30%] rounded-lg items-center p-1 mt-5 justify-center">
            <input type="text" className="grow w-full focus:outline-none rounded-lg h-full" placeholder={`Search for gartekgcloud`} />
            <button type="button" className="py-1 w-40 h-full text-white rounded-lg bg-[#FFA500] opacity-70"><a href="../../../frontend/" target="_blank" rel="noopener noreferrer">Send</a></button>
          </div>
        </div>
        <div className="mt-5 text-white">
          <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
            <div><p>About</p></div>
            <div><p>FAQs</p></div>
            <div><p>Contact Us</p></div>
          </div>
          <div className="gap-5 mt-10 flex items-center justify-center">
            <span className="bg-white bg-opacity-40 p-2 rounded-full">
              <a href="https://x.com/gartekcloude?t=7x-qcXQUdoMhWaFsdTEqQQ&s=09" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </span>
            <span className="bg-white bg-opacity-40 p-2 rounded-full">
              <a href="https://www.linkedin.com/company/gartekcloudehq/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-10">
            <img src="gartekcloud.png" className="w-[395px] h-[78px] md:w-[595px] md:h-[98px]" alt="gartekcloud" />
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
        <div className="flex flex-row -mt-96 opacity-30 overflow-hidden justify-between">
          <div>
            <div className="w-80 h-80 ml-40">
              <img src="Ellipse 2.png" alt="ellipse1" srcset="" />
            </div>
            <div className="flex flex-row -mt-56">
              <div className="w-80 h-80">
                <img src="Ellipse 2.png" alt="ellipse2" srcset="" />
              </div>
              <div className="w-80 h-80">
                <img src="Ellipse 3.png" alt="ellipse3" srcset="" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-80 h-80 ml-40">
              <img src="Ellipse 3.png" alt="ellipse3" srcset="" />
            </div>
            <div className="flex flex-row -mt-56">
              <div className="w-80 h-80">
                <img src="Ellipse 2.png" alt="ellipse2" srcset="" />
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>
  ) 
}
