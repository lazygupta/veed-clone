import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import { useSizeContext } from "@/FileContext/SizeContext";
import { useFileContext } from "@/FileContext/FileContext";
import { useTimeContext } from "@/FileContext/TimeContext"; // Import TimeContext
import { NumberInput, Stack } from "@mantine/core";
import { Clock } from "lucide-react";

const LeftMenu = () => {
  const { width, setWidth, height, setHeight } = useSizeContext();
  const { fileUrl } = useFileContext();
  const { startTime, setStartTime, endTime, setEndTime } = useTimeContext(); // Use TimeContext

  const handleWidthChange = (e) => setWidth(e); // Update width
  const handleHeightChange = (e) => setHeight(e); // Update height

  const handleStartTimeChange = (value) => {
    const newTime = parseFloat(value);
    if (!isNaN(newTime) && newTime >= 0) {
      setStartTime(newTime);
    } else {
      console.error("Invalid start time:", value);
    }
  };

  const handleEndTimeChange = (value) => {
    const newTime = parseFloat(value);
    if (!isNaN(newTime) && newTime >= 0) {
      setEndTime(newTime);
    } else {
      console.error("Invalid end time:", value);
    }
  };

  return (
    <div className="h-100 w-100">
      <div className="rounded-xl h-[510px]">
        <div className="p-2 mt-2 ml-2 font-sans text-[1.125rem] leading-[1.5rem] tracking-[0px] font-semibold">
          Add Media
        </div>
        <FileUpload />

        <div className="p-4">
          {fileUrl && (
            <Stack spacing="md">
              <NumberInput
                label="Width:"
                value={width}
                onChange={handleWidthChange}
                min={0}
                step={1}
                classNames={{
                  input: "border p-1 ml-2",
                  label: "block mb-2",
                }}
              />
              <NumberInput
                label="Height:"
                value={height}
                onChange={handleHeightChange}
                min={0}
                step={1}
                classNames={{
                  input: "border p-1 ml-2",
                  label: "block mb-2",
                }}
              />
            </Stack>
          )}

          <div className="mt-10 bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-3 w-full max-w-md">
              <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <Clock className="text-gray-400 w-5 h-5" />
                  <div className="flex flex-col">
                    <label
                      htmlFor="start-time"
                      className="text-sm text-gray-500 font-medium"
                    >
                      Start (Decimal)
                    </label>
                    <input
                      id="start-time"
                      type="number"
                      step="0.01"
                      value={startTime.toFixed(2)} // Use context value
                      onChange={(e) => handleStartTimeChange(e.target.value)}
                      className="text-lg font-semibold text-gray-700 bg-transparent outline-none w-24"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="text-gray-300 font-medium">|</div>

                <div className="flex items-center gap-2 flex-1">
                  <Clock className="text-gray-400 w-5 h-5" />
                  <div className="flex flex-col">
                    <label
                      htmlFor="end-time"
                      className="text-sm text-gray-500 font-medium"
                    >
                      End (Decimal)
                    </label>
                    <input
                      id="end-time"
                      type="number"
                      step="0.01"
                      value={endTime.toFixed(2)} // Use context value
                      onChange={(e) => handleEndTimeChange(e.target.value)}
                      className="text-lg font-semibold text-gray-700 bg-transparent outline-none w-24"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
