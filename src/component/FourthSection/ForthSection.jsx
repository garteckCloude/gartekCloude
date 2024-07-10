export default function ForthSection() {
  return (
    <section>
        <div className="bg-indigo-900">
            <div className=" flex flex-col items-center justify-center pt-24">
                <label className="input max-w-96 input-bordered px-7 rounded-lg flex bg-white items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-8 w-8 text-[#FFA500] opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow outline-none w-96 h-10" placeholder={`Search for gartekgcloud`} />
                </label>
            </div>
            <div>
                <div className=" flex flex-col items-center justify-center pt-10">
                    <img src="webdesign.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    </section>
  )
}
