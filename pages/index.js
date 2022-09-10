import Head from "next/head";
import Header from "../Components/Header";
import Login from "./Login";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import SidBar from "../Components/SidBar";
import Feeds from "../Components/Feeds";
import Widgets from "../Components/Widgets";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return <Login />;
  }

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>
      <Header />

      <main className="flex">
        {/* side bar */}
        <SidBar />
        {/* feed page */}
        <Feeds />
        {/* widgets */}
        <Widgets />
      </main>
    </div>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  // authenticate and save use info
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  ).then((res) => {
    if (res) {
      // save user credentials to db
      setDoc(
        doc(db, "users", res.user.email),
        {
          name: res.user.name,
          email: res.user.email,
          photoUrl: res.user.image,
          timestamp: serverTimestamp()
        },
        { merge: true }
      )
        .then(() => console.log("saved user info succesfully"))
        .catch((error) => console.log(`error authenticating user: ${error}`));
    }
  });


  return {
    props: {
      ...session
    },
  };
}
