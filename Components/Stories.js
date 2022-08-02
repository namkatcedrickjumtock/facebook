import StoryCard from "./StoryCard";

const stories = [
  {
    id: 2,
    name: "Elon Musk",
    profile: "/images/musk-profile.jpg",
    src: "/images/musk.jpg",
  },
  {
    id: 3,
    name: "Pst Steven ",
    profile: "/images/Pastor-Steven-Furtick.jpg",
    src: "/images/stevenProfile.jpg",
  },
  {
    id: 4,
    name: "Jeff Bezos",
    profile: "/images/jeff-profile.jpg",
    src: "/images/bezos.jpg",
  },
  {
    id: 5,
    name: "Barack Obama",
    profile: "/images/Obama-profile.jpg",
    src: "/images/obamasrc.jpeg",
  },
  {
    id: 6,
    name: "Bill Gates",
    profile: "/images/gates-profile.jpg",
    src: "/images/gates-src.jpg",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => {
      return  <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />;
      })}
    </div>
  );
};

export default Stories;
