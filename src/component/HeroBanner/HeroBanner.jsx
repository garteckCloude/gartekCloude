import InfinityScroll from "../InfinityScroll/InfinityScroll";
import SecondInfinityScroll from "../InfinityScroll/SecondInfinityScroll";
import ThirdInfinityScroll from "../InfinityScroll/ThirdInfinityScroll";

export default function HeroBanner() {
  return (
    <section>
      <div className="relative overflow-hidden h-full">
        {/* Content above InfinityScroll */}
        <div className="flex gap-32 flex-col bg-[#FFA500] sm:flex-row z-0 relative">
          <div className="ml-40 pt-14 sm:block w-96">
            <p className="text-white text-6xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Access</p>
            <p className="text-white text-6xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Learn</p>
            <p className="font-bold text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-indigo-900">Connect</p>
          </div>
          <div className="sm:block w-full">
            <img src="/public/Group 1171275269.png" alt="gartekcloud_mobile" />
          </div>
        </div>

        <div className="absolute top-[650px] h-full bg-black  md:top-[687px] sm:top-[357px] lg:top-[750px] left-0 w-full z-20">
          <InfinityScroll />
          <SecondInfinityScroll />
          <ThirdInfinityScroll />
        </div>
      </div>
      <div className="flex flex-row opacity-30 overflow-hidden justify-between -mt-[1000px]">
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
    </section>
  );
}
