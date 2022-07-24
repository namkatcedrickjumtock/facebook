import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcons";


export default function Header() {
  return (
    <div className="sticky top-0 bg-white flex items-center p-2 md:px-5 shadow-md">
      {/* left section */}
      <div className="flex items-center">
        <Image
          alt="logo"
          src={"https://links.papareact.com/5me"}
          width={40}
          height={40}
          layout={"fixed"}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 flex-shrink">
          <SearchIcon className="h-6  text-gray-600" />
          <input
            type="text"
            placeholder="search facebook"
            className=" hidden md:inline-flex items-center bg-transparent outline-none placeholder-gray-500
           
          "
          />
        </div>
      </div>

      {/* center section */}
      <div className="flex justify-center flex-grow">

        <div className="flex space-x-6 md:space-x-2">
           <HeaderIcon active Icon={HomeIcon}/>
           <HeaderIcon Icon={FlagIcon}/>
           <HeaderIcon Icon={PlayIcon}/>
           <HeaderIcon Icon={ShoppingCartIcon}/>
           <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>


      {/* right section */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* <Image/> profile pic */}
        <p className="pr-3 font-semibold whitespace-nowrap">Cedrick Jumtock</p>
        <ViewGridAddIcon className="icon"/>
        <ChatIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
      </div>
    </div>
  );
}
