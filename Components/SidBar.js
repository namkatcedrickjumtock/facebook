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
import SideBarRow from "./SideBarRow";

const SidBar = () => {
  const {data:session, isLoading} = useSession();

  return (
    <div className="p-2 mt-5 max-w[600px] xl:min-w-[300]">
      <SideBarRow src={session.user.image}  title={session.user.name}/>
      <SideBarRow Icon={UserIcon}  title='Friends'/>
      <SideBarRow Icon={UserGroupIcon}  title='Groups'/>
      <SideBarRow Icon={ShoppingBagIcon}  title='Martket Place'/>
      <SideBarRow Icon={DesktopComputerIcon}  title='Watch'/>
      <SideBarRow Icon={CalendarIcon}  title='Events'/>
      <SideBarRow Icon={ClockIcon}  title='Memories'/>
      <SideBarRow Icon={ChevronDoubleDownIcon}  title='See More'/>

    </div>
  );
};

export default SidBar;
