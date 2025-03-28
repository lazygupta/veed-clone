"use client";

import { useFileContext } from "../../FileContext/FileContext";
import { useRef, useEffect } from "react";

export default function VideoCanvasApp() {
  const { file, fileType, fileUrl } = useFileContext(); // Access shared context
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  const drawVideoToCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = videoRef.current;

    const render = () => {
      if (video && !video.paused && !video.ended) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        animationFrameRef.current = requestAnimationFrame(render);
      }
    };
    render();
  };

  const drawImageToCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = fileUrl;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

  useEffect(() => {
    if (!file || !fileType || !fileUrl) {
      return; // Exit if no file is selected
    }

    if (fileType === "image") {
      drawImageToCanvas();
    }

    if (fileType === "video") {
      const video = videoRef.current;
      video.load(); // Ensure the video is loaded
      drawVideoToCanvas();
    }

    return () => {
      // Cleanup any animation frames when file changes
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [file, fileType, fileUrl]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="720"
        height="420"
        className="border"
        style={{ backgroundColor: "black" }}
      />
      {fileType === "video" && (
        <video
          ref={videoRef}
          src={fileUrl}
          onPlay={drawVideoToCanvas} // Start drawing when video plays
          onPause={() => cancelAnimationFrame(animationFrameRef.current)} // Stop drawing when paused
          onEnded={() => cancelAnimationFrame(animationFrameRef.current)} // Stop drawing when video ends
          className="hidden"
          controls
        />
      )}
    </div>
  );
}
