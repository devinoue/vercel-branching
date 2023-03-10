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
        <div>
          test2
          <br />
          NEXT_PUBLIC_API_BASE_URL: {process.env.NEXT_PUBLIC_API_BASE_URL}
          <br />
          Vercel上の環境: {process.env.NEXT_PUBLIC_VERCEL_ENV}
          <br />
          デプロイされたブランチ:{" "}
          {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}
        </div>
      </main>
    </>
  );
}
