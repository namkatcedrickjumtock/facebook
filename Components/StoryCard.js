import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20  
    lg:h-56 lg:w-32  cursor-pointer overflow-x p-3
    transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse
    "
    >
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={src}
        alt="pics"
        height={40}
        width={40}
        layout={"fixed"}
        objectFit={"cover"}
      />
      <Image
        className="object-cover filter brightness-75 rounded-[2em] lg:rounded-3xl"
        src={profile}
        alt="pics"
        layout={"fill"}
      />
      <p className="absolute opacity-0 lg:opcaity-100  w-5/6  text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
