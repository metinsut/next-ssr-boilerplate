import React from "react";
import Dashboard from "../../components/layouts/dashboard";
import { Post as TPost } from "../../types/posts";

type Props = {
  post: TPost;
};

export default function Post({ post }: Props) {
  return (
    <div className="p-4">
      <div>{post.id}</div>
      <div>{post.title}</div>
    </div>
  );
}

Post.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: TPost[] = await res.json();

  return {
    paths: posts.map(({ id }) => {
      return {
        params: {
          id: id.toString(),
        },
      };
    }),
    fallback: false,
  };
}

type Params = {
  params: {
    id: string;
  };
};

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }: Params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: TPost = await res.json();

  return {
    // Passed to the page component as props
    props: { post },
  };
}
