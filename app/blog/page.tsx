
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

const Blog = () => {
  // const [posts, setPosts] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getAllPosts().then(setPosts).finally(() => setLoading(false));
  // },[]);  

  return (
    <section className="max-w-4xl mx-auto p-4 flex flex-col justify-center items-center gap-6">
      <h1 className="text-3xl text-amber-600"> Blog page</h1>
      <PostSearch />
        <Posts />      
    </section>
  )
}

export default Blog;
