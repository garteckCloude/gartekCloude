import { Button, Link} from "@nextui-org/react";


export default function Hero() {
  return (
    <section>
        <div className="mb-10">
          <div className="container">
            <img src="HeroBanner.png" alt="" srcset="" />
          </div>
          <div className="flex flex-col items-center justify-center -mt-4 sm:-mt-16 md:-mt-36 xl:-mt-40">
            <div>
              <img src="" alt="" srcset="" />
            </div>
            <div className="flex flex-col items-center font-normal">
              <p>Join thousands of students transforming their study experience with</p>
              <p>seamless access to organized materials and powerful  media</p>
              <p>integration on Gartekcloude!</p>
            </div>
            <div>
              <img src="" alt="" srcset="" />
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Button as={Link} href="/waitlist" className="bg-[#FFA500] h-10 w-52 rounded-lg text-white">join waitlist now!</Button>
          </div>
        </div>
    </section>
  )
}
