"use client"

import BottomBar from "@/components/BottomBar/BottomBar";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import MainContent from "@/components/MainContent/MainContent";
import NavbarMinimal from "@/components/Navbar/NavbarMinimal";
import Topbar from "@/components/Topbar/Topbar";
import { FileProvider } from "@/FileContext/FileContext";

export default function Home() {
  return (
    <FileProvider> {/* Wrap the entire app */}
      <div className="flex h-screen">
        <NavbarMinimal />

        <div className="relative flex h-full w-full">
          {/* LeftMenu */}
          <div className="z-10 bg-[#fcfdff]">
            <LeftMenu /> {/* UploadButton is inside LeftMenu */}
          </div>

          {/* Main Content */}
          <div className="flex flex-1 flex-col">
            <div className="flex-1 relative bg-[#f7f6f9]">
              <div className="">
                <div className="mb-4">
                  <Topbar />
                </div>
                <div>
                  <MainContent /> {/* Canvas is inside MainContent */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BottomBar - Fixed at the bottom and over all components */}
        <div className="fixed bottom-0 left-20 w-full z-100 ">
          <BottomBar />
        </div>
      </div>
    </FileProvider>
  );
}
