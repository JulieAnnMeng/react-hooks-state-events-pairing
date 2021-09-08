import video from "../data/video.js";
import React, { useState } from "react";
import Details from "./Details";
import Comments from "./Comments";

function App() {
  // console.log("Here's your data:", video);
  const [videoData, setVideoData] = useState(video)

  function handlevotes(e){
    setVideoData({...videoData, [e.target.id]: videoData[e.target.id] + 1})
    console.log(videoData)
}

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Details videoData={videoData} handlevotes={handlevotes}/>
      <Comments videoComments={videoData.comments} />
    </div>
  );
}

export default App;
