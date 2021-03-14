import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const fetchAllPosts = async () => {
            const res = await axios.get('http://localhost:4002/posts');
            console.log(res.data);
            setPosts(res.data);
        };
        fetchAllPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return <div key={post.id} className="card" styles={{ width: '30%', marginBottom: '20px' }}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList comments={post.comments} />
                <CommentCreate postId={post.id} />
            </div>
        </div>
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>
    )
};

export default PostList;