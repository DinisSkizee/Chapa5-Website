import Head from "next/head";

import StartScreen from "../common/components/startScreen/start-screen";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chapa5</title>
      </Head>
      <section className="min-h-screen">
        <StartScreen />
      </section>
    </>
  );
}
