'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../store/slices/comentsSlice';

export default function ComentsPost({postId}) {
    const dispatch = useDispatch();
    const { comments, status } = useSelector((state) => state.comments);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchComments()); 
        }
    }, [dispatch, postId, status]);

    if (status === 'loading') {
        return <div>Loading comments...</div>;
    }

    if (status === 'failed') {
        return <div>Failed to load comments.</div>;
    }
    const filteredComments = comments.filter(comment => comment.postId == postId);
    return (
        <div className='pt-5 flex flex-col pl-44 w-4/5'>
            <h2 className='font-inter font-bold text-2xl '>Comments</h2>
            <ul >
                {filteredComments.map((comment) => (
                    <li key={comment.id} className='pt-5'>
                        <h3 className='font-inter font-semibold text-2xl'>{comment.name}</h3>
                        <p className='font-inter font-normal opacity-50 text-sm pt-3'>{comment.body}</p>
                        <p className='font-inter font-normal opacity-60 text-sm pt-3'>{comment.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};