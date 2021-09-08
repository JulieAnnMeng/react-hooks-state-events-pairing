import Votes from "./Votes";

function Details ({videoData, handlevotes})  {

    return (
        <> 
            <h1>{videoData.title}</h1>
            <p>{videoData.views} Views | Uploaded {videoData.createdAt}</p>
            <Votes videoData={videoData} handlevotes={handlevotes} />
        </>
    )
}

export default Details;