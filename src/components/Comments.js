import React from "react";
import imgAvatar02 from "../assets/avatar02.png";

function Comments(comment) {
  return (
    <div>
      <img src={comment.author.avatar} />
      <div>
        <strong>{comment.author.name}</strong> {comment.content}
      </div>
    </div>
  );
}

export default Comments;
