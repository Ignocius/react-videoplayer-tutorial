import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos)
  const renderedVideos = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />
  }) 
  return (
    <div className="ui relaxed divided list">
      {renderedVideos}
    </div>
  );
}

export default VideoList;