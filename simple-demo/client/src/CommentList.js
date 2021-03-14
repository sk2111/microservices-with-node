import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CommentList = ({ postId }) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            let res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
            console.log("Test",res);
            setComments(res.data);
        };
        fetchComments();
    }, [postId]);

    return (
        <ul>
            {
                comments.map(comment => {
                    return <li key={comment.id}>{comment.content}</li>
                })
            }
        </ul>
    );
};


export default CommentList;