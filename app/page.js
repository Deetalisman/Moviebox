import Image from "next/image";
import { PiTelevision } from "react-icons/pi";
import { TbEqualDouble } from "react-icons/tb";
import { SiYoutubemusic } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";

export default function Home() {
  return (
    <main className="home px-5 lg:px-20 pt-7">
      <Homemain />
      <Homebody />
    </main>
  );
}

function Homemain() {
  return (
    <main className="flex justify-between ">
      <div className="flex">
        <div className="bg-[red] rounded-full px-2 w-[2.7rem] h-[2.7rem] pt-2 ">
          <PiTelevision className="text-[1.8rem]" />
        </div>
        <h1 className="font-bold text-[1.2rem] mt-2 ml-2">MovieBox</h1>
      </div>
      <div className="border-2 hidden mt-2 sm:flex justify-between rounded-md w-[17rem] lg:w-[27rem] h-[2rem]">
        <input
          className="px-2 outline-none py-1 w-80 text-sm bg-transparent text-[white] "
          type="text"
          placeholder="What do you want to watch?"
        />
        <IoSearchSharp className="mr-3 mt-1 text-[1.2rem] cursor-pointer" />
      </div>
      <div className="flex cursor-pointer">
        <p className="mt-2 mr-2">Sign in</p>
        <small className="bg-[red] rounded-full px-1 w-[2.1rem] h-[2rem] pt-1 mt-1">
          <TbEqualDouble className="text-[1.5rem]" />
        </small>
      </div>
    </main>
  );
}

function Homebody() {
  return (
    <div className="mt-[10rem] w=[80%] mx-[10%] sm:mx-[0] text-center sm:text-start sm:w-[23rem]">
      <h1 className=" text-[2.6rem] sm:text-[3.2rem] leading-0 font-medium head">
        John Wick 3 : Parabellum
      </h1>
      <div className="flex justify-center">
        <>
          <LiaImdb className="text-[2.4rem] text-yellow-400" />
          <p className="ml-4 mt-2 text-[0.8rem]">860/100</p>
        </>
        <div className="flex mt-2 ml-4">
          <GiTomato className="text-[tomato] text-[1.4rem]" />
          <p className="ml-2 text-[0.8rem]">97%</p>
        </div>
      </div>
      <p className="text-sm mt-2">
        John Wick is on the run after killing a member of the international
        assassins' guild and with a $14 million price tag on his head, he is the
        target of hit man and women everywhere.
      </p>
      <div className="bg-[red] mt-2 m-auto sm:m-0 cursor-pointer flex justify-between rounded-sm w-[9rem] px-3 py-2 text-sm sm:mt-[0.6rem]">
        <SiYoutubemusic className="text-[1rem]" />

        <p className="text-[0.8rem]">WATCH TRAILER</p>
      </div>
    </div>
  );
}
