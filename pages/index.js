import Head from "next/head";

import Heading from "components/Heading";

export default function Home() {
  return (
    <div>
      <Head>
        <title>YouTube Clone</title>
        <meta name="description" content="A great YouTube Clone" />
        <title>Digital Downloads</title>
        <meta name="description" content="Digital Downloads Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading />
      <h1>Welcome!</h1>

      <h1 className="flex justify-center mt-20 text-xl">Welcome!</h1>
    </div>
  );
}
