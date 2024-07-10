import { Textarea, Button, Input, Link} from "@nextui-org/react";

import React from "react";

export default function Form() {
  return (
    <div className="flex w-[80%] lg:w-[40%] bg-slate-100 mx-auto flex-col gap-4 shadow-gray-300 shadow-xl px-5 py-3">
      <div>
      <label>First Name</label>
        <Input type="email" className="border border-gray-600 outline-none rounded-md mt-5" placeholder="Enter your email" />
      </div>
      <div>
        <label>Last Name</label>
        <Input type="email" className="border border-gray-600 outline-none rounded-md mt-5" placeholder="Enter your email" />
      </div>
      <div>
        <label>Email Mail</label>
        <Input type="email" className="border border-gray-600 outline-none rounded-md mt-5" placeholder="Enter your email" />
      </div>
      <div>
        <label>Comment</label>
        <Textarea
        label="Description"
        placeholder="Enter your description"
        className="max-w-full mt-5 border border-gray-600 outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-wrap items-center justify-center">
        <Button as={Link} className="bg-[#FFA500] w-40 text-white mt-12 rounded" href="#" variant="flat">
          Send Message
        </Button>
      </div>
    </div>
  );
}
