import React, {useState} from 'react';

export default function Header({video, commDisplay,handleToggle}) {
    const[upvotes, setUpVotes] = useState(video.upvotes);
    const[downvotes, setDownVotes] = useState(video.downvotes);

    function handleUpVote() {
        setUpVotes(upvotes + 1);
    }

    function handleDownVote() {
        setDownVotes(downvotes + 1);
    }

    return(
        <div id="Header">
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button id="up-votes" onClick={handleUpVote}>{upvotes}👍</button>
            <button id="down-votes" onClick={handleDownVote}>{downvotes}👎</button>
            <br></br><br></br>
            <button id="hide-comments" onClick={handleToggle}>Hide Comments</button>
        </div>
    )
}