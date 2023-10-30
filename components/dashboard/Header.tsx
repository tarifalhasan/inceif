"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dashboardNavlinks } from "@/constant/nav-link";
import Link from "next/link";
import { FC, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Container from "../Container";

const DashboardHeader: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className=" bg-gradient-1 h-[100px]  flex items-center bg-no-repeat">
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
            {dashboardNavlinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <span className="text-base text-white font-inter font-semibold">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative bg-white px-5 py-2 rounded-full focus:outline-none  inline-flex items-center  gap-1">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatar.png" alt="@INCEIF" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <span className="text-base font-semibold text-skin-black-900 font-inter">
                    John Doe
                  </span>
                  <FiChevronDown className="text-3xl text-skin-black-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">INCEIF</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
              <strong className="text-t-32  font-bold font-open_sans">
                INCEIF.
              </strong>
            </div>
            <IoClose
              onClick={() => setIsOpenMenu(false)}
              className="lg:hidden text-skin-black-900  block "
              size={29}
            />
          </div>
          <ul className=" pt-9  flex flex-col items-center gap-7">
            {dashboardNavlinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <span className="text-base text-white font-inter font-semibold">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative bg-white px-5 py-2 rounded-full focus:outline-none  inline-flex items-center  gap-1">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatar.png" alt="@INCEIF" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <span className="text-base font-semibold text-skin-black-900 font-inter">
                    John Doe
                  </span>
                  <FiChevronDown className="text-3xl text-skin-black-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">INCEIF</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default DashboardHeader;
