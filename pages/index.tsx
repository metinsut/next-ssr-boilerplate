import Head from "next/head";
import Dashboard from "../components/layouts/dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>Hello Next</main>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
