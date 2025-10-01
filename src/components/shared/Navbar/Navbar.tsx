

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Navbar() {
  const [user, setUser] = useState<any>(null);



  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyPortfolio
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/register">Register</Link>

          {/* Auth Links */}
          {!user && <Link href="/login">Login</Link>}

          {user?.role === "USER" && (
            <>
              <Link href="/resume">My Resume</Link>
              <button onClick={() => { localStorage.removeItem("token"); location.reload(); }}>
                Logout
              </button>
            </>
          )}

          {user?.role === "ADMIN" && (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button onClick={() => { localStorage.removeItem("token"); location.reload(); }}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}






