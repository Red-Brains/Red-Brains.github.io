import WrapperContainer from "@/components/WrapperContainer";
import React from "react";
import ErrorImage from "@/assets/error.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NotFound() {
  return (
    <WrapperContainer className="font-serif mt-4">
      <Image alt="404" src={ErrorImage} className="mx-auto h-60"></Image>
      <h1 className="text-center text-xl  ">
        Unexpected Error Occured! - <span className="text-red-600">404</span>
      </h1>
      <Link className="mt-4 font-sans flex justify-center" href={"/"}>
        <button className=" py-2 px-3 bg-gray-50 rounded hover:shadow-sm ">
          <FontAwesomeIcon icon={faHomeAlt}></FontAwesomeIcon> Home
        </button>
      </Link>{" "}
      <div className="h-0.5 shadow-sm mt-5"></div>
    </WrapperContainer>
  );
}
