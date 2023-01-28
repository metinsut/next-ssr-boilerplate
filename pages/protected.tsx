import { getSession, signIn, useSession } from "next-auth/react";
import { NextApiRequest } from "next/types";
import { useEffect } from "react";
import Dashboard from "../components/layouts/dashboard";
import { NextPageWithLayout } from "./_app";

const Protected: NextPageWithLayout = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        This page is Protected for special people. like
        {JSON.stringify(data.user, null, 2)}
      </div>
    );

  return <div>loading</div>;
};

Protected.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};

export default Protected;

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const session = await getSession({ req });

  if (!session) {
    signIn();
  }

  return {
    props: { session },
  };
}
