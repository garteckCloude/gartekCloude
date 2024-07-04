import InfinityScroll from "../InfinityScroll/InfinityScroll";
import SecondInfinityScroll from "../InfinityScroll/SecondInfinityScroll";
import ThirdInfinityScroll from "../InfinityScroll/ThirdInfinityScroll";

export default function HeroBanner() {
  return (
    <div className="relative ">
      {/* Content above InfinityScroll */}
      <div className="flex gap-32 flex-col bg-[#FFA500] sm:flex-row z-0 relative">
        <div className="ml-6 sm:block w-96">
          <p className="text-white text-6xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Access</p>
          <p className="text-white text-6xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Learn</p>
          <p className="font-bold text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-indigo-900">Connect</p>
        </div>
        <div className="sm:block w-full">
          <img src="/public/Group 1171275269.png" alt="gartekcloud_mobile" />
        </div>
      </div>

      <div className="absolute top-[840px]  md:top-[587px] sm:top-[357px] lg:top-[750px] left-0 w-full z-10">
        <InfinityScroll />
        <SecondInfinityScroll />
        <ThirdInfinityScroll />
      </div>
    </div>
  );
}
