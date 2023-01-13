import Head from "next/head";
import Dashboard from "../components/layouts/dashboard";

export default function Home() {
  return <p>Hello Next</p>;
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
