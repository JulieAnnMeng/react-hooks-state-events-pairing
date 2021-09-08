import { useState } from "react";
import HideButton from "./HideButton";

function Comments ({videoComments})  {
    const [comments, setComments] = useState(videoComments)
    const [commentButton, setCommentButton] = useState(true);

    const renderComments = comments.map((comment) => {
        return(
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>    
        )});

    function handleClick(){
        setCommentButton(!commentButton)
    }

    return (
        <div> 
            <br></br>
            <HideButton commentButton={commentButton} handleClick={handleClick}/>
            <h2>{renderComments.length} Comments</h2> 
            {commentButton ? renderComments : ""}
        </div>
    )
}

export default Comments;