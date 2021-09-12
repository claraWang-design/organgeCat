
import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from '@material-ui/core';

const Post = forwardRef (({
    name,
    text,
    image,
    avatar
}, ref) =>{
    return (
        <div className="post" ref={ref} >
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{name}</h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
            </div>
        </div>

    );
}
);

export default Post;
