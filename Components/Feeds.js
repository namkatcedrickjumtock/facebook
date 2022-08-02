import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

const Feeds = () => {
  return (
    <div className="flex-grow h-screen xl:mr-40 overflow-y-auto pt-6 pb-44 scrollbar-hide">
      {/* stories */}
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        {/* input box  */}
        <InputBox />
        {/* post */}
        <Posts />
      </div>
    </div>
  );
};

export default Feeds;
