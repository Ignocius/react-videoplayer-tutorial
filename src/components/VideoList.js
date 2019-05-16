import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  console.log(videos)
  const renderedVideos = videos.map((video) => {
    return <VideoItem video={video} key={video.etag} />
  }) 
  return (
    <div>
      {renderedVideos}
    </div>
  );
}

export default VideoList;