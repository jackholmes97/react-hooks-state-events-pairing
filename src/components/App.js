import React, {useState} from 'react'
import video from "../data/video.js";
import Header from './Header';
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  const[commDisplay, setCommDisplay] = useState(true)

  function handleToggle() {
    setCommDisplay(!commDisplay);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header video={video} commDisplay={commDisplay} handleToggle={handleToggle}/>
      <Comments comments={video.comments} commDisplay={commDisplay}/>
    </div>
  );
}

export default App;
