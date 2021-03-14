import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <ul>
            {
                comments.map(comment => {
                    let content;
                    if (comment.status === 'approved') {
                        content = comment.content;
                    }
                    if (comment.status === 'pending') {
                        content = 'This comment is waiting for moderation';
                    }
                    if (comment.status === 'rejected') {
                        content = 'This comment is rejected';
                    }

                    return <li key={comment.id}>{content}</li>
                })
            }
        </ul>
    );
};


export default CommentList;