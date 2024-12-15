'use client'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/slices/postsSlice';
import { checkAuth } from '@/store/slices/authSlice';
import Link from 'next/link';
const PostList = ({slug}) => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.auth.user);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
    dispatch(checkAuth());
  }, [dispatch, status]);

  if (status === 'loading') {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }


return (
    <div className='flex  gap-1  pr-4'>
      {posts.slice(0, 5).map(post => ( // Limit to 5 posts
        <article key={post.id} className="p-4 w-1/5 pt-5 pb-5  ">
          <img src="https://via.placeholder.com/150" alt="Post Image" className="mb-2 w-full h-[136px] rounded-2xl" />
          <p className="text-sm text-gray-600 mt-1 opacity-50">Wednesday 12, March 2024</p>
          {user ?   <Link href={`/post/${post.id}`}><h3 className="font-semibold mt-2 mb-1 text-lg" >{post.title}</h3></Link> :
         <Link href="/authorization/signIn"><h3 className="font-semibold mt-2 mb-1 text-lg">{post.title}</h3></Link>}
          <p className="text-sm opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">{post.body}</p>
        </article>
      ))}
    </div>
  );
};

export default PostList;
