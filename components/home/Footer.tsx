"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FormEvent } from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa";
import Container from "../Container";
const Footer = () => {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="pt-24">
      <footer className="bg-skin-footer   relative">
        <div className=" bg-gradient-1 rounded-xl -top-[120px] absolute left-0 right-0 flex items-center min-h-[200px] px-10 max-w-[95%] sm:max-w-[85%] mx-auto  justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center mx-auto  gap-5">
            <h2 className=" text-[1.5rem] 2xl:text-t-32 font-playfair font-normal text-white">
              Subscribe Newsletters
            </h2>
            <form
              onSubmit={onSubmit}
              className="bg-white  rounded-full flex items-center justify-between h-[72px] px-5 py-1"
            >
              <div className="flex items-center   flex-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M2.625 2.625H18.375C18.6071 2.625 18.8296 2.71719 18.9937 2.88128C19.1578 3.04538 19.25 3.26794 19.25 3.5V17.5C19.25 17.7321 19.1578 17.9546 18.9937 18.1187C18.8296 18.2828 18.6071 18.375 18.375 18.375H2.625C2.39294 18.375 2.17038 18.2828 2.00628 18.1187C1.84219 17.9546 1.75 17.7321 1.75 17.5V3.5C1.75 3.26794 1.84219 3.04538 2.00628 2.88128C2.17038 2.71719 2.39294 2.625 2.625 2.625ZM10.5525 10.2226L4.942 5.45825L3.80888 6.79175L10.5639 12.5274L17.1972 6.78737L16.0528 5.4635L10.5534 10.2226H10.5525Z"
                    fill="url(#paint0_linear_33_49)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_33_49"
                      x1="1.75"
                      y1="2.625"
                      x2="21.3619"
                      y2="5.96162"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#69B3DA" />
                      <stop offset={1} stopColor="#4AA3D3" />
                    </linearGradient>
                  </defs>
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  name=""
                  className="bg-transparent flex-1  w-full focus:outline-none outline-none text-skin-black-500 lg:text-base font-inter text-xs "
                  id=""
                />
              </div>
              <button
                type="submit"
                className=" bg-gradient-1 text-xs sm:text-base py-3 text-white  font-medium font-inter px-5 rounded-full"
              >
                Subcribe Now
              </button>
            </form>
          </div>
        </div>
        <ul className="flex pt-28 pb-7 items-center justify-center gap-x-4">
          <li>
            <Link href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={24} className="text-skin-blue-300" />
            </Link>
          </li>
          <li>
            <Link href="http://" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-skin-blue-300" />
            </Link>
          </li>
          <li>
            <Link href="http://" target="_blank" rel="noopener noreferrer">
              <FaVimeoV size={24} className="text-skin-blue-300" />
            </Link>
          </li>
          <li>
            <Link href="http://" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} className="text-skin-blue-300" />
            </Link>
          </li>
        </ul>
        <div className="border-t border-[#B5D9ED80] border-opacity-50 py-3">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-xs sm:text-sm font-normal font-inter text-skin-black-500">
                © 2023 INCEIF. All rights reserved.
              </p>
              <strong className="text-t-32 font-bold font-open_sans">
                INCEIF.
              </strong>
              <ul className="flex  items-center gap-3">
                <li>
                  <a
                    href="http://"
                    className="text-xs sm:text-sm hover:underline font-normal font-inter text-skin-black-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="http://"
                    className="text-xs sm:text-sm hover:underline font-normal font-inter text-skin-black-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
