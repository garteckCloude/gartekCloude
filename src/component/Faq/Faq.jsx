import FaqComponent from "./FaqComponent";

export default function Faq() {
  return (
    <section>
        <div className="flex flex-col md:gap-96 mt-10 gap-20 md:flex-row w-full overflow-hidden">
            <div className="md:ml-40">
                <h1 className="font-bold text-3xl md:text-5xl pl-5">Frequently <br /> <span className="text-[#FFA500] md:text-black">Ask Questions</span></h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaqComponent />  
            </div>    
        </div>        
        <div className="mt-10 flex flex-col items-center justify-center">
            <div>
              <p className="font-bold text-2xl">Have More Questions</p>
            </div>
            <div>
              <p  className="font-bold text-2xl text-[#FFA500]">Kindly Send us a message</p>
            </div>
            <div>
              <button type="button" className="bg-[#FFA500] text-white px-5 py-1 rounded-lg mt-5">Contact Us</button>
            </div>
        </div>
    </section>
  )
}
