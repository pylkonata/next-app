'use client';
import { getAllPosts } from "@/services/getPosts";
// import { usePosts } from "@/store";
import Link from "next/link";
import useSWR from "swr";
// import { useEffect } from "react";

type PostItem = {
  id: string;
  title: string;
}
type PostsList = {
  posts: PostItem[]
}
export const Posts = () => {
  // const [posts, loading, getAllPosts] = usePosts((state) => [
  //   state.posts, state.loading, state.getAllPosts,
  // ]);
  
  // useEffect(() => {
  //   getAllPosts();
  // }, []);
  const { data: posts, isLoading} = useSWR('posts', getAllPosts);

  return isLoading ? (<h3>Loading...</h3>) :(
    <ul>
      {
        posts.map((post: PostItem) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}> {post.id} | {post.title}</Link>
          </li>
        ))
      }
    </ul>
  )
}
