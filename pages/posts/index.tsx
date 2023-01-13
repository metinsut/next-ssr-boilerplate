import Link from "next/link";
import Dashboard from "../../components/layouts/dashboard";
import { Post } from "../../types/posts";

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <div className="p-4">
      <h1>Static Site Render</h1>
      <div className="grid gap-2">
        {posts.map((post) => (
          <Link href={"posts/" + post.id.toString()} key={post.id}>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

Posts.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};
