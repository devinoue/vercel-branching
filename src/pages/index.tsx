import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        ADD Staging NEXT_PUBLIC_API_BASE_URL:{" "}
        {process.env.NEXT_PUBLIC_API_BASE_URL}
        <br />
        API_URL: {process.env.API_URL}
      </main>
    </>
  );
}
