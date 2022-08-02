import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export default function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    // insert post into firebase
    await addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      PhotoUrl: session.user.image,
      timestamp: serverTimestamp(),
    }).then((doc) => {
      //  upload image ? true
      if (imageToPost) {
        const storageRef = ref(storage, `posts/${doc.id}`);
        const uploadTask = uploadString(storageRef, imageToPost, "data_url")

        removeImage();

        // task 3 observers state change, progress and complete in that order.
        uploadTask.on(
          "state_changed",
          // monitors upload progress
          null,
          // reurns if there's an error
          (error) => console.error(error),
          () => {
            // Upload completed successfully, now we can get the download URL and save to db
            getDownloadURL(storageRef).then(async (downloadURL) => {
              await setDoc(
                doc(db, "posts", doc.id),
                {
                  PostImage: downloadURL,
                },
                { merge: true }
              );
            });
          }
        );
      }
      
    });

    inputRef.current.value = "";
  };

  const addImageToPost = async (e) => {
    // initialized reader fxn to read the filed user clicked
    const reader = new FileReader();

    // if there's a file clicked
    e.target.files[0] ? reader.readAsDataURL(e.target.files[0]) : null;

    // asycn when done reading file
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium pt-6">
      <div className="flex space-x-4 items-center p-4">
        <Image
          className="rouded-full"
          src={session.user.image}
          height={40}
          width={40}
          layout={"fixed"}
        />
        <form className="flex flex-1">
          <input
            placeholder={`What's on your  mind, ${session.user.name}?`}
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 focus:outline-none flex-grow"
          />
          <button hidden onClick={sendPost}>
            submit
          </button>
        </form>

        {imageToPost && (
          <div
            className="flex flex-col  filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <Image
              src={imageToPost}
              className="h-10 object-contain"
              width={50}
              height={50}
            />
            <p className="text-red-500 text-center text-xs">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly  p-3 border-t">
        <div className="InputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="InputIcon"
          // invoke the hidden field
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type={"file"}
            hidden
          />
        </div>
        <div className="InputIcon">
          <EmojiHappyIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}
