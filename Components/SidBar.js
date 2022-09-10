import {
  ChevronDoubleDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";
import SideBarColumn from "./SideBarColumn.js";

const SidBar = () => {
  const {data:session, isLoading} = useSession();

  return (
    <div className="p-2 mt-5 max-w[600px] xl:min-w-[300]">
      <SideBarColumn src={session.user.image}  title={session.user.name}/>
      <SideBarColumn Icon={UserIcon}  title='Friends'/>
      <SideBarColumn Icon={UserGroupIcon}  title='Groups'/>
      <SideBarColumn Icon={ShoppingBagIcon}  title='Martket Place'/>
      <SideBarColumn Icon={DesktopComputerIcon}  title='Watch'/>
      <SideBarColumn Icon={CalendarIcon}  title='Events'/>
      <SideBarColumn Icon={ClockIcon}  title='Memories'/>
      <SideBarColumn Icon={ChevronDoubleDownIcon}  title='See More'/>

    </div>
  );
};

export default SidBar;
