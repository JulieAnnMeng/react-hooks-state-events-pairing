
function Votes ({videoData, handlevotes})  {

    return (
        <> 
            <button id="upvotes" onClick={handlevotes}>{videoData.upvotes} 👍</button>
            <button id="downvotes" onClick={handlevotes}>{videoData.downvotes} 👎</button>
        </>
    )
}

export default Votes;