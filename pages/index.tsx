import { getSession, signIn, useSession } from "next-auth/react";
import { NextApiRequest } from "next/types";
import Dashboard from "../components/layouts/dashboard";

export default function Home() {
  const { status, data } = useSession();

  if (status === "unauthenticated") {
    signIn();
  }
  return <p>Hello Next</p>;
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const session = await getSession({ req });
  if (!session) {
    signIn();
  }

  return {
    props: { session },
  };
}
