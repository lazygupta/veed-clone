import React, { useState } from 'react';
import FileUpload from '../FileUpload/FileUpload';
import { useSizeContext } from '@/FileContext/SizeContext';
import { NumberInput, Stack } from '@mantine/core';
import { useFileContext } from '@/FileContext/FileContext';
import { Clock } from 'lucide-react';

const LeftMenu = () => {
  const { width, setWidth, height, setHeight } = useSizeContext();

  const [startTime, setStartTime] = useState(0); // Decimal format for start time
  const [endTime, setEndTime] = useState(0); // Decimal format for end time

  const { fileUrl } = useFileContext();

  const handleWidthChange = (e) => {
    setWidth(e); // Update width from input
  };

  const handleHeightChange = (e) => {
    setHeight(e); // Update height from input
  };

  const formatDecimalToTime = (decimal) => {
    const minutes = Math.floor(decimal);
    const seconds = Math.round((decimal - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const parseTimeToDecimal = (value) => {
    const [minutes, seconds] = value.split(':').map(Number);
    return minutes + seconds / 60;
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
                  input: 'border p-1 ml-2',
                  label: 'block mb-2',
                }}
              />
              <NumberInput
                label="Height:"
                value={height}
                onChange={handleHeightChange}
                min={0}
                step={1}
                classNames={{
                  input: 'border p-1 ml-2',
                  label: 'block mb-2',
                }}
              />
            </Stack>
          )}

          {/* Start and End time in decimal format */}
          <div className="mt-10 bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-3 w-full max-w-md">
              <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <Clock className="text-gray-400 w-5 h-5" />
                  <div className="flex flex-col">
                    <label htmlFor="start-time" className="text-sm text-gray-500 font-medium">
                      Start (Decimal)
                    </label>
                    <input
                      id="start-time"
                      type="number"
                      step="0.01"
                      value={startTime}
                      onChange={(e) => setStartTime(parseFloat(e.target.value))}
                      className="text-lg font-semibold text-gray-700 bg-transparent outline-none w-24"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="text-gray-300 font-medium">|</div>

                <div className="flex items-center gap-2 flex-1">
                  <Clock className="text-gray-400 w-5 h-5" />
                  <div className="flex flex-col">
                    <label htmlFor="end-time" className="text-sm text-gray-500 font-medium">
                      End (Decimal)
                    </label>
                    <input
                      id="end-time"
                      type="number"
                      step="0.01"
                      value={endTime}
                      onChange={(e) => setEndTime(parseFloat(e.target.value))}
                      className="text-lg font-semibold text-gray-700 bg-transparent outline-none w-24"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500 font-medium">Formatted Start Time: {formatDecimalToTime(startTime)}</p>
                <p className="text-sm text-gray-500 font-medium">Formatted End Time: {formatDecimalToTime(endTime)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;