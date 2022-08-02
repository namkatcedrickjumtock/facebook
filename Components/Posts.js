import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [realTimePost, loading, error] = useCollection(
    query(collection(db, "posts"), orderBy("timestamp", "desc"))
  );
  console
    .log
    // realTimePost?.docs.map((doc) => console.log(doc.data().timestamp))
    ();

  return (
    <div>
      {realTimePost?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().PhotoUrl}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
};

export default Posts;
