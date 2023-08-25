'use client';
import { getPostsBySearch } from '@/services/getPosts';
import { FormEventHandler, useState } from 'react';
import useSWR from "swr";

// import { usePosts } from '@/store';
export const PostSearch = () => {
  const {mutate} = useSWR('posts')
  const [search, setSearch] = useState('');
  // const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='px-4 py-1 border rounded-sm'
        type='search'
        placeholder='Search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type='submit' className='bg-teal-600 px-4 py-1 border rounded-sm text-white hover:bg-teal-500'>Search</button>
    </form>
  )
}
