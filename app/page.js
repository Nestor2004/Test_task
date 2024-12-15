'use client'
import PostList from '../components/Posts/PostList';
import './globals.css'
import Post from "@/components/Posts/Post";
import ReduxProvider from './reduxProvider';
const data={
  title: "Global Climate Summit Urges Immediate Action",
  description: "Leaders from around the world gathered for a global climate summit, emphasizing the urgent need for coordinated action to address climate change."
}
export default function MainPage() {
  return (
    <ReduxProvider>
    <main className="px-10">
        <section className="mb-10" >
          <Post title={data.title} description={data.description}/>
        </section>
        <section className="w-full bg-white rounded-3xl   border border-gray-300">
          <PostList />
        </section>
    </main>
    </ReduxProvider>
  );
}
