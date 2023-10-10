import WrapperContainer from "@/components/WrapperContainer";
import React from "react";
import MunralImageSection1 from "@/assets/section1_munral.png";
import Image from "next/image";

export default function page() {
  return (
    <WrapperContainer className="mt-4 py-10 ">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold  font-serif">
          Revolutionizing Business with Digital Solutions: Transforming Customer
          Success
        </h1>
        <p className="text-gray-600">The Digital Infrastructure Company.</p>

        <div className="inline-block mx-auto mt-4">
          <button className="bg-red-600 text-white hover:bg-red-700 py-2 px-4 rounded">
            Know More
          </button>
        </div>

        <div className="shadow-sm w-full h-0.5 mt-6"></div>
        <div className="h-10"></div>

        <Image
          alt="Section 1 munral Image"
          src={MunralImageSection1}
          className="mx-auto"
        ></Image>
      </div>
    </WrapperContainer>
  );
}
