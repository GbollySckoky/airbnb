import React from "react";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { datas } from "../../Components/j/data";

const Hero: React.FC = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div id="img">
        <div className="w-[60%] h-[700px] flex flex-col justify-end items-start pb-[70px] mx-auto">
          <p className="font-[400] text-[30px] mb-6 text-white">
            Find Your Perfect <br /> Stay Anywhere in the World.
          </p>
          <div className="flex items-center">
            <div className="bg-Blue text-white rounded-l-lg py-3 pl-4 w-[250px]">
              <p className="font-[400] text-[12px] mb-1">Where Next</p>
              <p className="font-[400] text-[12px]">Select Destination</p>
            </div>
            <div className="bg-Gray py-3 pl-4 w-[170px]">
              <p className="font-[400] text-[12px] mb-1">Check-in</p>
              <p className="font-[400] text-[12px] text-lightGray">Select Date</p>
            </div>
            <div className="bg-white py-[25px] px-9 flex gap-3">
              <button>
                <FaArrowLeft size={14} />
              </button>
              <button>
                <FaArrowRightLong size={14} />
              </button>
            </div>
            <div className="bg-Gray py-3 pl-4 w-[170px]">
              <p className="font-[400] text-[12px] mb-1">Check-out</p>
              <p className="font-[400] text-[12px] text-lightGray">Select Date</p>
            </div>
            <div className="bg-Blue text-white py-3 w-[250px] pl-4 rounded-r-lg">
              <p className="font-[400] text-[12px] mb-1">Guest</p>
              <p className="font-[400] text-[12px]">Add Visitor</p>
            </div>
            <button className="bg-white rounded-lg p-5 flex items-center justify-center text-center ml-4">
              <IoIosSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="bg-Blue flex items-center text-white justify-center py-5">
        <h1 className="font-semibold text-[16px]">Places to Stay</h1>
        <h1 className="font-normal text-[14px] ml-7">Experiences</h1>
      </nav>

      {/* Filter Section */}
      <section>
        <ul className="flex justify-center items-center py-3 bg-Gray gap-4">
          {datas?.map((data, index) => (
            <li
              key={index}
              className="cursor-pointer py-2 px-4 rounded-lg hover:bg-Gray text-center"
            >
              {data.icon && (
                <Image
                  src={data.icon}
                  alt={data.name}
                  width={24}
                  height={24}
                  className="mx-auto mb-2"
                />
              )}
              <p className="font-[400] text-[14px] ">{data.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Hero;
