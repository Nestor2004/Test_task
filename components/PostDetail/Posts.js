'use client'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/slices/postsSlice';
import Link from 'next/link';
import Image from 'next/image';
import RelativeIcon from '../../app/assets/Related.svg'
const Posts = ({slug}) => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }


return (
    <div className='grid pt-7'>
        <div className='flex pb-6'>
            <div className='flex pl-4 gap-1'>
                <Image src={RelativeIcon} alt='' width={18}/>
                <span className='font-inter font-medium text-[20px] pt-1'>Related Articles</span>
            </div>
            <div className='bg-white ml-60 w-28 h-9 rounded-full'>
                <button className='pt-2 pl-5 font-inter font-normal text-[14px]'>Read more</button>
            </div>
            
        </div>

      {posts.slice(0, 5).map(post => (
        <article key={post.id} className="flex flex-row w-full gap-5">
            <img src="https://via.placeholder.com/150" alt="Post Image" className="mb-2 w-[223px] h-[136px] rounded-2xl ml-4" />
          <div className="flex flex-col h-[136px]">
            <p className="text-sm text-gray-600  opacity-30 pb-5">Wednesday 12, March 2024</p>
            <Link href={`/post/${post.id}`}><h3 className="font-semibold font-inter text-[16px] h-full w-[223px]" >{post.title}</h3></Link> 
            <p className="text-sm opacity-50 pt-2 whitespace-nowrap text-ellipsis overflow-hidden w-[223px] font-normal font-inter">{post.body}</p>
          </div>
          
        </article>
      ))}
    </div>
  );
};
export default Posts;