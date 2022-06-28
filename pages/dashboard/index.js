import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Heading from "components/Heading";

export default function Dashboard() {
  const router = useRouter();

  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) return null;

  if (!session) {
    router.push("/");
  }

  if (session && !session.user.name) {
    router.push("/setup");
  }

  return (
    <div>
      <Head>
        <title>Digital Downloads</title>
        <meta name="description" content="Digital Downloads Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading />

      <h1 className="flex justify-center mt-20 text-xl">Dashboard</h1>
    </div>
  );
}
