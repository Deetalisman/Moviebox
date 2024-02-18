import Image from "next/image";
import stranger from "./stranger1.jpg";
import img1 from "./avengers.jpg";
import img2 from "./bee.jpg";
import img3 from "./captain.webp";
import img4 from "./dunkirk.jpg";
import img5 from "./fury.jpg";
import img6 from "./hacksaw.jpg";
import img7 from "./ironman.jpg";
import img8 from "./no time.jpg";
import img9 from "./spider.jpg";
import img10 from "./strange.jpg";
import img11 from "./thor.jpeg";
import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
function Mainbody() {
  return (
    <div className="mx-[6%] my-[10rem] sm:my-[3%] mainbody ">
      <div className="flex justify-between">
        <p className="font-bold text-sm sm:text-lg">Featured Movie</p>
        <div className="flex">
          <p className="text-red-400 mr-1 text-sm sm:text-lg ">See more </p>
          <IoIosArrowForward className="text-red-400 mt-1" />
        </div>
      </div>
      <Movies />
    </div>
  );
}

function Movies() {
  return (
    <main className=" mt-2 sm:mt-5 flex flex-wrap justify-between movies">
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={stranger} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-[0.3rem] sm:text-sm mt-2">
          USA, 2016 - Current
        </p>
        <p className="font-bold text-[0.9rem] sm:text-[1.2rem]">
          Stranger Things
        </p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img1} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Avengers</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img2} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Beekeeper</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img3} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Captain America</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img4} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Dunkirk</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img5} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Fury</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img6} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Hacksaw Ridge</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img7} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Iron Man</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img8} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">No Time To Die</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img9} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Spider Man</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img10} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white]" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Doctor Strange</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
      <div className="w-[15rem] mb-10 movie">
        <div className="relative">
          <Image src={img11} className="w-[100%] h-[21rem]" />
          <div className="absolute top-1 mx-2 my-2 flex justify-between w-[92%]">
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md ">
              <p className="text-[0.8rem] font-semibold text-slate-950">
                TV SERIES
              </p>
            </div>
            <div className=" bg-opacity-60 bg-slate-400 p-1 rounded-md">
              <GiSelfLove className="text-[white] cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">USA, 2016 - Current</p>
        <p className="font-bold text-[1.2rem]">Thor</p>
        <div className="flex justify-between">
          <div className="flex">
            <LiaImdb className="text-[1.8rem] text-yellow-400" />
            <p className="ml-4 mt-2 text-[0.7rem]">860/100</p>
          </div>
          <div className="flex mt-2 ml-4">
            <GiTomato className="text-[red] text-[1.2rem]" />
            <p className="ml-2 text-[0.7rem]">97%</p>
          </div>
        </div>
        <p className="text-gray-500 text-[0.7rem] mt-0">
          Action,Adventure,Horror
        </p>
      </div>
    </main>
  );
}

export default Mainbody;
