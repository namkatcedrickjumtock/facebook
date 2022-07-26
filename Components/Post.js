import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Post = ({ name, message, postImage, timestamp }) => {
  const { data: session } = useSession();
  return (

    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm ">
        <div className="flex items-center space-x-2">
          <Image alt="pic" src={session?.user.image} height={40} width={40} />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image src={postImage} objectFit={"cover"} layout={"fill"} />
        </div>
      )}

      {/* footer section */}
      <div className="flex justify-between   p-3 items-center rounded-b-2xl bg-white shadow-md  text-gray-400 border-t">
        <div className="InputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="InputIcon rounded-none ">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="InputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
