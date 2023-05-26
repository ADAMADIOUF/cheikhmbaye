import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

const HeaderVideo = () => {
  const [videoIndex, setVideoIndex] = useState(0)
  const videos = [
    './images/h1.mp4',
    './images/h2.mp4',
    './images/h3.mp4',
    './images/h4.mp4',
  ]

  useEffect(() => {
    const nextVideoIndex = (videoIndex + 1) % videos.length
    const timeout = setTimeout(() => setVideoIndex(nextVideoIndex), 3000) // Adjust the delay (in milliseconds) between videos as needed

    return () => clearTimeout(timeout)
  }, [videoIndex, videos])

  const handleVideoEnded = () => {
    const nextVideoIndex = (videoIndex + 1) % videos.length
    setVideoIndex(nextVideoIndex)
  }

  return (
    <div style={{ display: 'flex' }}>
      {videos.map((video, index) => (
        <ReactPlayer
          key={index}
          url={video}
          playing={videoIndex === index}
          controls={false}
          muted={true}
          width='25%'
          height='400px'
          onEnded={handleVideoEnded}
        />
      ))}
    </div>
  )
}

export default HeaderVideo
