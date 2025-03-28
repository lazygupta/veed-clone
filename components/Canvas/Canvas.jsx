"use client";

import {  useSizeContext } from "@/FileContext/SizeContext";
import { useFileContext } from "../../FileContext/FileContext";
import { useRef, useEffect, useState } from "react";
import { usePlaybackContext } from "@/FileContext/TogglePlayback";
import { useTimeContext } from "@/FileContext/TimeContext";

export default function DraggableResizableCanvas() {
  const { fileType, fileUrl } = useFileContext();
  const canvasRef = useRef(null);
  const { width, height } = useSizeContext();
  const videoRef = useRef(null);
  const { isPlaying, setIsPlaying } = usePlaybackContext();
  const [image, setImage] = useState(null);
  const [mediaProps, setMediaProps] = useState({
    x: 10,
    y: 10,
    width: 680,
    height: 380,
  });
  let cursor = "draggable";

  useEffect(() => {
    setMediaProps((prev) => ({
      ...prev,
      width: parseInt(width, 10),
      height: parseInt(height, 10),
    }));
  }, [width, height]);

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState(null);

  const { startTime, endTime } = useTimeContext();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", () => {
        setDuration(videoRef.current.duration);
      });
    }
  }, [fileUrl]);

  useEffect(() => {
    if (videoRef.current) {
      const interval = setInterval(() => {
        setCurrentTime(videoRef.current.currentTime);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime < startTime) {
        videoRef.current.currentTime = startTime; 
      }
      if (videoRef.current.currentTime > endTime) {
        videoRef.current.pause(); 
        setIsPlaying(false);
      }
    }
  };

  useEffect( () =>{
    console.log(startTime);
    console.log(endTime);
    
    
  },[startTime],[endTime])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime; 
    }
  }, [startTime, endTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const milliseconds = Math.floor((timeInSeconds % 1) * 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${milliseconds}`;
  };

  const HANDLE_SIZE = 8;

  useEffect(() => {
    if (fileType === "image" && fileUrl) {
      const img = new Image();
      img.src = fileUrl;
      img.onload = () => setImage(img);
    }
  }, [fileType, fileUrl]);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Check if mouse is on any of the resize handles
    const corners = getCorners();
    for (const corner in corners) {
      const { x, y } = corners[corner];
      if (
        mouseX >= x - HANDLE_SIZE / 2 &&
        mouseX <= x + HANDLE_SIZE / 2 &&
        mouseY >= y - HANDLE_SIZE / 2 &&
        mouseY <= y + HANDLE_SIZE / 2
      ) {
        setIsResizing(true);
        setResizeHandle(corner);
        return;
      }
    }

    // Check if the mouse is within the image bounds for dragging
    if (
      mouseX >= mediaProps.x &&
      mouseX <= mediaProps.x + mediaProps.width &&
      mouseY >= mediaProps.y &&
      mouseY <= mediaProps.y + mediaProps.height
    ) {
      setIsDragging(true);
      setDragOffset({
        x: mouseX - mediaProps.x,
        y: mouseY - mediaProps.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const corners = getCorners();

    if (!isDragging && !isResizing) {
      for (const corner in corners) {
        const { x, y } = corners[corner];
        if (
          mouseX >= x - HANDLE_SIZE / 2 &&
          mouseX <= x + HANDLE_SIZE / 2 &&
          mouseY >= y - HANDLE_SIZE / 2 &&
          mouseY <= y + HANDLE_SIZE / 2
        ) {
          if (corner === "top-left" || corner === "bottom-right") {
            cursor = "nwse-resize"; // Diagonal double-sided arrow
          } else if (corner === "top-right" || corner === "bottom-left") {
            cursor = "nesw-resize"; // Diagonal double-sided arrow
          }
          break;
        }
      }
    }

    canvas.style.cursor = cursor;

    if (isDragging) {
      setMediaProps((prev) => ({
        ...prev,
        x: mouseX - dragOffset.x,
        y: mouseY - dragOffset.y,
      }));
    }

    if (isResizing) {
      setMediaProps((prev) => {
        const newProps = { ...prev };
        if (resizeHandle === "top-left") {
          newProps.x = mouseX;
          newProps.y = mouseY;
          newProps.width = prev.x + prev.width - mouseX;
          newProps.height = prev.y + prev.height - mouseY;
        } else if (resizeHandle === "top-right") {
          newProps.y = mouseY;
          newProps.width = mouseX - prev.x;
          newProps.height = prev.y + prev.height - mouseY;
        } else if (resizeHandle === "bottom-left") {
          newProps.x = mouseX;
          newProps.width = prev.x + prev.width - mouseX;
          newProps.height = mouseY - prev.y;
        } else if (resizeHandle === "bottom-right") {
          newProps.width = mouseX - prev.x;
          newProps.height = mouseY - prev.y;
        }
        return newProps;
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeHandle(null);
  };

  const getCorners = () => {
    const { x, y, width, height } = mediaProps;
    return {
      "top-left": { x, y },
      "top-right": { x: x + width, y },
      "bottom-left": { x, y: y + height },
      "bottom-right": { x: x + width, y: y + height },
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (fileType === "image" && image) {
        ctx.drawImage(
          image,
          mediaProps.x,
          mediaProps.y,
          mediaProps.width,
          mediaProps.height
        );
      }

      if (fileType === "video" && videoRef.current) {
        ctx.drawImage(
          videoRef.current,
          mediaProps.x,
          mediaProps.y,
          mediaProps.width,
          mediaProps.height
        );
      }

      const corners = getCorners();
      if (fileUrl) {
        for (const corner in corners) {
          const { x, y } = corners[corner];
          ctx.beginPath();
          ctx.arc(x, y, HANDLE_SIZE / 2, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.strokeStyle = "black";
          ctx.stroke();
        }
      }
      requestAnimationFrame(render);
    };

    render();
  }, [image, mediaProps, fileType]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      {fileType === "video" && (
        <video
          ref={videoRef}
          src={fileUrl}
          style={{ display: "none" }}
          loop={false}
          muted
          onTimeUpdate={handleTimeUpdate}
        />
      )}
      <canvas
        ref={canvasRef}
        width="720"
        height="420"
        className="border"
        style={{
          backgroundColor: "black",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      {fileType === "video" && (
        <div className="flex flex-col mt-4">
          <div className="mt-2">
            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
          </div>
          <button onClick={() => (videoRef.current.currentTime = startTime)}>
            Restart
          </button>
        </div>
      )}
    </>
  );
}
