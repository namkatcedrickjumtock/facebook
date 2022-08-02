import {
  DotsHorizontalIcon,
  VideoCameraIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import Contact from "./Contact";

const Widgets = () => {
  // custom images
  const contacts = [
    { src: "https://links.papareact.com/f0p", names: "Jeff Bezos" },
    { src: "https://links.papareact.com/KxK", names: "Elon Musk" },
    { src: "https://links.papareact.com/zvy", names: "Bill Gates" },
    { src: "https://links.papareact.com/snf", names: "Mark Zuckerberg" },
    { src: "https://links.papareact.com/d0c", names: "Harry potter" },
    { src: "https://links.papareact.com/6gg", names: "The Queen" },
    { src: "https://links.papareact.com/r57", names: "James Bond" },
  ];
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2>contacts</h2>
        <div className="flex space-x-2">
          <DotsHorizontalIcon className="h-6" />
          <VideoCameraIcon className="h-6" />
          <SearchCircleIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.names} src={contact.src} name={contact.names} />
        );
      })}
    </div>
  );
};

export default Widgets;
