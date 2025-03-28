"use client"

import { useState, useRef } from "react"
import { UploadCloudIcon } from "lucide-react"
import { useFileContext } from "../../FileContext/FileContext"

export default function FileUpload() {
  const {fileName, setFileName, setFileUrl, setFileType } = useFileContext()
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      processFile(file)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      processFile(file)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleLinkImport = () => {
    const url = prompt("Enter file URL:");
    if (url) {
      setFileUrl(url);
      setFileType(url.match(/\.(mp4|mov|avi|mkv)$/i) ? "video" : "image");
      setFileName(url.split("/").pop()); // Extract file name from URL
    }
  };


  const processFile = (file) => {
    if (!file) return;
    const isValidType = file.type.startsWith("video") || file.type.startsWith("image");
    if (!isValidType) {
      alert("Invalid file type. Please upload an image or video.");
      return;
    }

    setFileUrl(URL.createObjectURL(file));
    setFileType(file.type.startsWith("video") ? "video" : "image");
    setFileName(file.name);
  };

  return (
    <div className="flex justify-center items-center max-h-[200px] p-4 cursor-pointer">
      <div
        className={`border border-gray-200 rounded-lg w-full max-w-md p-8 flex flex-col items-center justify-center gap-2 transition-colors ${isDragging ? "bg-gray-50 border-gray-300" : "bg-white"
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
        <UploadCloudIcon className="w-8 h-8 text-gray-500" />
        <h3 className="text-lg font-medium text-gray-900 mt-2">Upload a File</h3>
        <p className="text-sm text-gray-500">
          Drag & drop a file
          <br />
          or{" "}
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={(e) => {
              e.stopPropagation()
              handleLinkImport()
            }}
          >
            import from a link
          </button>
        </p>
      </div>
    </div>
  )
}
