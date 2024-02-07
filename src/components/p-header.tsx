import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PrimaryHeader() {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center navbar bg-primary rounded-lg glass px-4 py-6 max-w-6xl mx-auto">
        <Link href="/">
          <Image
            className="rounded-lg"
            src="/logo1.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className="menu menu-vertical lg:menu-horizontal bg-neutral text-primary text-lg rounded-box">
          <li>
            <Link href="/about">About AKA</Link>
          </li>
          <li>
            <a>Projects</a>
          </li>

          <li>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </header>
    </>
  );
}
