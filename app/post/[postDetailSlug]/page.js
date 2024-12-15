
import Posts from "@/components/PostDetail/Posts";
import ComentsPost from "@/components/PostDetail/coments";
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
            <section className="w-3/5 grid pt-5">
            <div><PostDetail title={post.title} body={post.body}/></div>
            <div><ComentsPost postId={postDetailSlug}/></div>
            
            </section>
            <section className="w-2/5">
                <Posts/>
            </section>
        </main>
    )
}