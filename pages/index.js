import Head from "next/head";
import Header from "../Components/Header";
import Login from "./Login";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession} from "next-auth/react";
import SidBar from "../Components/SidBar";
import Feeds from "../Components/Feeds";

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
      </main>
    </div>
  );
}



// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  };
}
