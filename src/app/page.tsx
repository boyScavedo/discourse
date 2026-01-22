import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LOGIN",
};

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center border-2 border-white">
      <div className="w-[40vw] h-full lg:h-[80vh] p-10 flex flex-col lg:justify-between items-center border-2 border-white">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl">DISCOURSE</h1>
          <h2 className="text-sm text-gray-400">
            REALTIME CHATTING APPLICATION
          </h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          inventore, alias eligendi explicabo eius id, minus aliquid, voluptatem
          earum laudantium rem amet. Cum, porro repudiandae illo dignissimos
          impedit unde ad dolore enim voluptas obcaecati! Sed eius voluptate
          laboriosam culpa eligendi?
        </p>
        <div className="w-full px-20 flex flex-col gap-5 items-center lg:flex-row justify-between">
          <Button variant={"default"}>
            <Link href={"/login"}>LOGIN</Link>
          </Button>
          <Button variant={"secondary"}>
            <Link href={"/signup"}>SIGNUP</Link>
          </Button>
        </div>
      </div>
      <div className="w-[20vw] h-[80vh] p-10 hidden lg:flex lg:flex-col justify-center items-center border-2 border-white">
        <h1 className="text-gray-200">SOME IMAGE</h1>
      </div>
    </div>
  );
}
