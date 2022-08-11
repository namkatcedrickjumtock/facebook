import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Posts = ({ postResponse }) => {
  const { data: session } = useSession();
  const [realTimePost, loading, error] = useCollection(
    collection(db, "posts"),
    where("email", "==", session.user.email),
    orderBy("timestamp", "desc")
  );

  console.log(postResponse);

  return (
    <div>
      {realTimePost?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          timestamp={post.data().timestamp}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
};

export default Posts;

export const getServerSideProps = async () => {
  const querySnapShot = query(
    collection(db, "posts"),
    where("email", "==", session.user.email),
    orderBy("timestamp", "desc")
  );

  const postResponse = await getDocs(querySnapShot).then((res) =>
    postDoc.docs.map((postDoc) => (postDoc.id, postDoc.data()))
  );
  console.log(postResponse);
  return {
    props: {
      ...postResponse,
    },
  };
};
