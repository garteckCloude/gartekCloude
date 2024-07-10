import { Button, Link} from "@nextui-org/react";


export default function Thirdsection() {
  return (
    <section>
        <div className="mt-40">
            <div className="flex flex-col items-center justify-center leading-normal text-5xl">
                <p className="font-extrabold lg:text-6xl text-4xl">We Are <span className="text-[#FFA500]">Revolutionnizing</span></p>
                <p className="font-extrabold lg:text-6xl text-3xl">The <span className="text-[#5E48DB]">EdTech</span> System</p>
            </div>

            <div className="flex flex-col items-center text-slate-500 mt-5">
                <p>Collaborate, Access Comprehensive & Organised course Materials,</p>
                <p>create connections & build Communities with Gartekcloude</p>
            </div>
            <div className="flex justify-center items-center mt-5">
                <Button as={Link} href="/waitlist" className="bg-[#FFA500] h-10 w-52 rounded-lg text-white">join waitlist now!</Button>
            </div>
        </div>
        <div>
            <img src="./Frame 2147223477.png" alt="img" srcset="" />
        </div>
    </section>
  )
}
