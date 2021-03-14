import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const fetchAllPosts = async () => {
            const res = await axios.get('http://localhost:4000/posts');
            setPosts(res.data);
        };
        fetchAllPosts();
    }, []);

    console.log("post data", posts);
    const renderedPosts = Object.values(posts).map(post => {
        return <div key={post.id} className="card" styles={{ width: '30%', marginBottom: '20px' }}>
            <div className="card-body">
                <h3>{post.title}</h3>
            </div>
        </div>
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>
    )
};

export default PostList;