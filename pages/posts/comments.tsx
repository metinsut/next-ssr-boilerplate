import React from "react";
import Dashboard from "../../components/layouts/dashboard";

type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type Props = {
  comments: comment[];
};

export default function Comments({ comments }: Props) {
  return (
    <div className="p-4">
      <h1>Server Site Render</h1>
      <div className="grid gap-2">
        {comments.map((comment) => (
          <div
            className="border border-gray-400 border-solid p-2 rounded-lg"
            key={comment.id}
          >
            <p>{comment.id}</p>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Comments.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboard>{page}</Dashboard>;
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();

  return { props: { comments } };
}
