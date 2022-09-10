import Image from "next/image";

const SideBarColumn = ({ src, title, Icon }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          height={40}
          width={40}
          alt="pic"
          layout="fixed"
          className="rounded-full"
          src={src}
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex  font-medium">{title}</p>
    </div>
  );
};

export default SideBarColumn;
