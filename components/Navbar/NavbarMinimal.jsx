"use client"

import React, { useState } from 'react';
import Video from '../Icons/Video';
import Audio from '../Icons/Audio';
import Subtitles from '../Icons/Subtitles';
import Text from '../Icons/Text';
import Element from '../Icons/Element';
import Settings from '../Icons/Setting';
import Logo from '../Icons/Logo';
import Brandkit from '../Icons/BrandKit';

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className={`w-12 h-12 flex cursor-pointer items-center justify-center rounded-full transition-colors ${active ? "bg-[#717ef6]" : "hover:bg-[#eaecff] text-gray-700"
          }`}
      >
        <Icon />
      </button>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
}

const mockdata = [
  { icon: Brandkit, label: "Brandkit" },
  { icon: Video, label: "Video" },
  { icon: Audio, label: "Audio" },
  { icon: Subtitles, label: "Subtitles" },
  { icon: Text, label: "Text" },
  { icon: Element, label: "Element" },
  { icon: Settings, label: "Settings" },
];

function NavbarMinimal() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <div className="z-100 min-h-screen bg-gray-100 flex">
      <nav className="w-20 h-screen flex flex-col items-center bg-white border-r border-gray-200 py-4">
        <div className=' p-3 rounded-xl shadow-xl border-none'>
          <Logo />
        </div>

        <div className="flex flex-col gap-4 mt-5">{links}</div>
      </nav>
    </div>
  );
}

export default NavbarMinimal;