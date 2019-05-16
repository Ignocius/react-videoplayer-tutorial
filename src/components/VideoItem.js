import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet } = video
  const { thumbnails } = snippet
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)} >
      <img className="ui image" alt={video.title} src={thumbnails.medium.url} />
      <div className="content">
        <h3 className="header">{snippet.title}</h3>
      </div>
    </div>
  );
}

export default VideoItem;