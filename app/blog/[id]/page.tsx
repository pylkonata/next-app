import { Metadata } from "next";

type Props = {
  params: { id: string };
}
async function getDataById(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    }
  });
  return response.json();
}
export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getDataById(id);
  return {
    title: post.title,
  }
}
const Post = async ({ params: { id } }: Props) => {
  const post = await getDataById(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
};

export default Post;
