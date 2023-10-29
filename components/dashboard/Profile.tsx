import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  RiFileList2Line,
  RiHistoryFill,
  RiLoader3Fill,
  RiLockFill,
  RiLogoutBoxRLine,
  RiUser3Fill,
} from "react-icons/ri";
const Profile = () => {
  return (
    <div className="bg-white rounded-[20px]  py-6">
      <div className="flex items-center flex-col pt-12 gap-y-6">
        <Avatar className="w-[112px] h-[112px] ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-lg sm:text-2xl font-inter font-semibold text-skin-black-900 text-center">
          John Doe
        </h2>
      </div>
      {/*  */}
      <ul className=" px-5 pt-14 space-y-5">
        <li className="flex items-center justify-between">
          <span className="block text-sm text-skin-black-300 font-medium font-inter">
            User ID
          </span>
          <span className="block text-sm text-skin-black-700 font-medium font-inter">
            DBDQ7V3C
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="block text-sm text-skin-black-300 font-medium font-inter">
            Email
          </span>
          <span className="block text-sm text-skin-black-700 font-medium font-inter">
            johndoe123@email.com
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="block text-sm text-skin-black-300 font-medium font-inter">
            Alternate Email
          </span>
          <span className="block text-sm text-skin-black-700 font-medium font-inter">
            Not Available
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="block text-sm text-skin-black-300 font-medium font-inter">
            Status
          </span>
          <span className="block text-sm text-skin-black-700 font-medium font-inter">
            Active
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="block text-sm text-skin-black-300 font-medium font-inter">
            Alternate Email
          </span>
          <span className="block text-sm text-skin-black-700 font-medium font-inter">
            16 Oct, 2023, 10:00
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="block text-sm text-skin-black-300 font-medium font-inter">
            Status
          </span>
          <span className="block text-sm text-skin-black-700 font-medium font-inter">
            16 Oct, 2023, 10:00
          </span>
        </li>
      </ul>
      <hr className="h-[1px] bg-skin-line-1 w-full my-10" />
      {/* navigation */}

      <ul className="px-5 space-y-8 w-full">
        <li className=" flex w-full cursor-pointer items-center gap-2">
          <RiUser3Fill className={`text-2xl text-skin-black-400 block`} />
          <span
            className={cn(
              "block text-base text-skin-black-400 font-medium font-inter"
            )}
          >
            My Account
          </span>
        </li>
        <li className=" flex w-full cursor-pointer items-center gap-2">
          <RiLockFill className={cn("text-2xl text-skin-black-400 block")} />
          <span
            className={cn(
              "block text-base text-skin-black-400 font-medium font-inter"
            )}
          >
            Change Password
          </span>
        </li>
        <li className=" flex w-full cursor-pointer items-center gap-2">
          <RiHistoryFill className={cn("text-2xl text-skin-black-400 block")} />
          <span
            className={cn(
              "block text-base text-skin-black-400 font-medium font-inter"
            )}
          >
            My Activities
          </span>
        </li>
        <li className=" flex w-full cursor-pointer items-center gap-2">
          <RiFileList2Line
            className={cn("text-2xl text-skin-black-400 block")}
          />
          <span
            className={cn(
              "block text-base text-skin-black-400 font-medium font-inter"
            )}
          >
            My Subscriptions
          </span>
        </li>
        <li className=" flex w-full cursor-pointer items-center gap-2">
          <RiLoader3Fill className={cn("text-2xl text-skin-black-400 block")} />
          <span
            className={cn(
              "block text-base text-skin-black-400 font-medium font-inter"
            )}
          >
            Renew Subscriptions
          </span>
        </li>
      </ul>
      <div className="pt-10 pb-3 ">
        <hr className="h-[1px] bg-skin-line-1 w-full " />
        <Link
          href={"/logout"}
          className=" px-5 pt-8 flex w-full cursor-pointer items-center gap-2"
        >
          <RiLogoutBoxRLine
            className={cn("text-2xl text-skin-red-600 block")}
          />
          <span
            className={cn(
              "block text-base text-skin-red-600 font-medium font-inter"
            )}
          >
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
