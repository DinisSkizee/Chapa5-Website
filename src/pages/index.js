import Link from "next/link";
import Head from "next/head";
import Header from "../common/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dinis Skr</title>
      </Head>
      <Header />
      <Link href="/about">About</Link>
      <h1 className="text-2xl text-blue-400">Hello World</h1>
    </>
  );
}
