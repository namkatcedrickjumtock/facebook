import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Login from "./Login";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  if (!session) {
    return <Login />;
  }

  return (
    <>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>
      <Header />

      <main>
        {/* side bar */}
        {/* feed page */}
        {/* widgets */}
      </main>
    </>
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
