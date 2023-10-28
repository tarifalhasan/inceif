"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Container from "../Container";
const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className=" absolute z-50 top-3 left-0 right-0">
      <Container>
        <header className="flex items-center justify-between ">
          <div>
            <Link href={"/"}>
              <span className="text-t-32 text-white font-bold font-open_sans">
                INCEIF.
              </span>
            </Link>
          </div>
          <ul className=" hidden md:inline-flex items-center gap-5">
            <li>
              <Link href={"#contact-us"}>
                <span className="text-base text-white font-inter font-semibold">
                  Contact Us
                </span>
              </Link>
            </li>
            <li>
              <Link href={"#contact-us"}>
                <span className="text-base text-white font-inter font-semibold">
                  Sign Up
                </span>
              </Link>
            </li>
            <li>
              <button className="login_btn">
                <span>Log In</span>
              </button>
            </li>
          </ul>
          <BiMenuAltRight
            onClick={() => setIsOpenMenu((prev) => !prev)}
            className="lg:hidden text-white  block "
            size={26}
          />
        </header>
        <div
          className={`fixed px-2 pt-2 w-full left-0 right-0 overflow-hidden top-0 indent-0 bg-white h-full z-[999] transition-all duration-300 ${
            isOpenMenu ? "translate-x-[0%]" : "translate-x-[-100%]"
          } `}
        >
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <strong className="text-t-32  font-bold font-open_sans">
                  INCEIF.
                </strong>
              </Link>
            </div>
            <IoClose
              onClick={() => setIsOpenMenu(false)}
              className="lg:hidden text-skin-black-900  block "
              size={29}
            />
          </div>
          <ul className=" pt-9  flex flex-col items-center gap-7">
            <li onClick={() => setIsOpenMenu(false)}>
              <Link href={"#contact-us"}>
                <span className="text-base text-skin-black-900 font-inter font-semibold">
                  Contact Us
                </span>
              </Link>
            </li>
            <li onClick={() => setIsOpenMenu(false)}>
              <Link href={"#contact-us"}>
                <span className="text-base text-skin-black-900 font-inter font-semibold">
                  Sign Up
                </span>
              </Link>
            </li>
            <li onClick={() => setIsOpenMenu(false)}>
              <button className="login_btn">
                <span>Log In</span>
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
