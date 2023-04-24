import React from "react";

export default function About() {
  return (
    <div>
      About
      <div id="video-wrapper">
        <div>
          <iframe
            id="video1"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qhU0TuszM4Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            id="video2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eiXzHmfKcPs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
