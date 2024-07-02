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
                    <input type="text" className="grow w-96 h-10" placeholder={`Search for gartekgcloud`} />
                    <button type="button" className="px-5 py-1 text-white rounded-lg bg-[#FFA500] opacity-70">Send</button>
                </label>
            </div>
          <div className="mt-5 text-white">
            <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
              <div><p>About</p></div>
              <div><p>FAQs</p></div>
              <div><p>Contact Us</p></div>
            </div>
            <div>
              <span>
                <img src="" alt="" srcset="" />
              </span>
              <span>
                <img src="" alt="" srcset="" />
              </span>
            </div>
          </div>
          
        </div>
    </section>
  )
}
