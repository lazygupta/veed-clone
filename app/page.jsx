"use client"

import BottomBar from "@/components/BottomBar/BottomBar";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import MainContent from "@/components/MainContent/MainContent";
import NavbarMinimal from "@/components/Navbar/NavbarMinimal";
import Topbar from "@/components/Topbar/Topbar";
import { FileProvider } from "@/FileContext/FileContext";
import { SizeProvider } from "@/FileContext/SizeContext";
import { TimeProvider } from "@/FileContext/TimeContext";
import { PlaybackProvider } from "@/FileContext/TogglePlayback";

export default function Home() {

  return (
    <FileProvider>
      <PlaybackProvider>
        <TimeProvider>
          <SizeProvider>
            <div className="flex h-screen">
              <NavbarMinimal />
              <div className="relative flex h-full w-full">
                {/* LeftMenu */}
                <div className="z-10 bg-[#fcfdff]">
                  <LeftMenu />
                </div>
                {/* Main Content staerting point */}
                <div className="flex flex-1 flex-col">
                  <div className="flex-1 relative bg-[#f7f6f9]">
                    <div className="">
                      <div className="mb-4">
                        <Topbar />
                      </div>
                      <div>
                        <MainContent />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottombar Starting point */}
              <div className="fixed bottom-0 left-20 w-full z-100 ">
                <BottomBar />
              </div>
            </div>
          </SizeProvider>
        </TimeProvider>
      </PlaybackProvider>
    </FileProvider>
  );
}
