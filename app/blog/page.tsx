import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    }
  });

  if(!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h1> Blog page</h1>
      <ul>
          {
            posts.map((post:any) => (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}> {post.id} | {post.title}</Link>
              </li>
            ))
          }
        </ul>
      </>
  )
}

export default Blog;
