import { Avatar, Button } from '@material-ui/core';
import React, { useState } from "react";
import "./PostBox.css";
import db from './firebase';


function PostBox() {
    const [postMessage, setPostMessage] = useState("");
    const [postImage, setPostImage] = useState("");

    const sentPost = e => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Clara Wang",
            image: postImage,
            text: postMessage,
            avatar: ""
        });

        setPostMessage("");
        setPostImage("");
    };

    return (
        <div className="postBox">
            <form>
                <div className="postBox__input">
                    <Avatar src="" />
                    <input
                        onChange={e => setPostMessage(e.target.value)}
                        value={postMessage} placeholder="Share your feelings to other peers" type="text" />
                </div>

                <input
                    value={postImage}
                    onChange={(e) => setPostImage(e.target.value)}
                    className="postBox__imageInput"
                    placeholder="Enter image URL"
                    type="text"
                />

                {/* <input placeholder="What is happending" type="text" /> */}
                <Button onClick={sentPost} className="postBox__postButton">Check-In</Button>
            </form>
        </div>
    )
}

export default PostBox
