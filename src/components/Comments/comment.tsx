import React, { useState } from "react";

type Comment = {
  id: number;
  text: string;
  user: string;
  timestamp: string;
};

const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <strong>{comment.user}</strong> - {comment.timestamp}
      </div>
      <div className="comment-text">{comment.text}</div>
    </div>
  );
};

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      text: "You are so cute!",
      user: "minnie",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      text: "Love your photo.",
      user: "lily",
      timestamp: "1 hour ago",
    },
    
  ]);

  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const addComment = () => {
    if (inputText.trim() !== "") {
      const newComment: Comment = {
        id: comments.length + 1,
        text: inputText,
        user: "annie",
        timestamp: "Just now",
      };

      setComments([...comments, newComment]);
      setInputText(""); // Clear input field after adding comment
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-list">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <br />
      <div className="add-comment-box">
        <input
          type="text"
          placeholder="Type your comment..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button className="add-comment-btn" onClick={addComment}>
          Add Comment
        </button>
      </div>
      <br />
    </div>
    
  );
};

export default CommentSection;
