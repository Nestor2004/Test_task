
import Posts from "@/components/PostDetail/Posts";
import PostDetail from "@/components/PostDetail/postDetail";
import { getPostBySlug } from "@/components/lib/getPost";
export default async function PostsDetail({params}){
    const{postDetailSlug}= await params;
    const post = await getPostBySlug(postDetailSlug); // Завантажуємо пост за допомогою slug
  
    if (!post) {
      return <p>Post not found</p>;
    }
    return( 
        <main className="flex">
            <section className="w-3/5">
            <PostDetail title={post.title} body={post.body}/>
            </section>
            <section className="w-2/5">
                <Posts/>
            </section>
        </main>
    )
}