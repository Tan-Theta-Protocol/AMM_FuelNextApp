"use client";
import React, { useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Pool from "@/Components/Pool";

export function Navbar() {
  const [showPool, setShowPool] = useState(false);
  const [showConnect, setShowConnect] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Pool",
      link: "#",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => setShowPool(true), // Set the state to show Pool
    },
    {
      name: "Connect",
      link: "/connect",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      onclick: () => alert("Connect"),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      {showPool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <button
              onClick={() => setShowPool(false)}
              className="absolute top-2 right-2 text-black dark:text-white"
            >
              X
            </button>
            <Pool />
          </div>
        </div>
      )}
    </div>
  );
}
