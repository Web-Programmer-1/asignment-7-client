




"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const pathname = usePathname();
  const [openProject, setOpenProject] = useState(false);

  // helper fn for active class
  const getLinkClass = (href: string) => {
    const base = "flex items-center p-3 rounded-lg transition font-medium";
    const active =
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md";
    const normal =
      "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
    return pathname === href ? `${base} ${active}` : `${base} ${normal}`;
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 mx-auto h-screen transition-transform 
                 -translate-x-full sm:translate-x-0 bg-white dark:bg-gray-900 shadow-lg"
      aria-label="Sidebar"
    >
      <div className="h-full px-4 py-6 overflow-y-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center ps-2.5 mb-8">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7 me-3"
            alt="Logo"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
            My Dashboard
          </span>
        </Link>

        {/* Menu */}
        <ul className="space-y-3">
          <li>
            <Link href="/dashboard" className={getLinkClass("/dashboard")}>
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/inbox"
              className={getLinkClass("/dashboard/inbox")}
            >
              Inbox
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/user"
              className={getLinkClass("/dashboard/user")}
            >
              Users
            </Link>
          </li>

          {/* Project Dropdown */}
          <li>
            <button
              onClick={() => setOpenProject(!openProject)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition font-medium ${
                openProject
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span>Projects</span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${
                  openProject ? "rotate-180" : ""
                }`}
              />
            </button>

            {openProject && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    href="/dashboard/project/create"
                    className={getLinkClass("/dashboard/project/create")}
                  >
                    ➕ Create Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/dash-project/get-all-project"
                    className={getLinkClass("/dashboard/project/all")}
                  >
                    📂 All Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/project/update"
                    className={getLinkClass("/dashboard/project/update")}
                  >
                    ✏️ Update Project
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
}







