import React, { useState } from 'react';
import axios from 'axios';


const CommentCreate = ({ postId }) => {

    const [comment, setComment] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content: comment
        });
        setComment('');
    };

    return (
        <div className="">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New comments</label>
                    <input className="form-control" value={comment}
                        onChange={(e) => setComment(e.target.value)} />
                </div>
                <button className="btn btn-primary m-1">Submit</button>
            </form>
        </div>
    )
};


export default CommentCreate;