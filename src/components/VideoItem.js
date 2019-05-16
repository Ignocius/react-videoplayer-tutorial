import React from 'react';

const VideoItem = ({ video }) => {
  const { snippet } = video
  const { thumbnails } = snippet
  return (
    <div>
      <h3>{snippet.title}</h3>
      <img src={thumbnails.default.url} />
    </div>
  );
}

export default VideoItem;