import React from "react";
import Comments from "./Comments";

function Post({ author, comments, date, content }) {
  return (
    <div className="board">
      <div className="top">
        <div className="profile">
          <img src={author.avatar} />
          <div className="user">
            <p>{author.name}</p>
            <small>{date}</small>
          </div>
        </div>

        <div className="phrase">{content}</div>
      </div>

      <div className="line-separator"></div>

      <div className="comments">
        {comments.map(comment => (
          <Comments {...comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default Post;
