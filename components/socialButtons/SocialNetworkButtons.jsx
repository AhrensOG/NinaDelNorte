"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SocialNetworkButtons = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed bottom-10 right-5 space-y-2 bg-white rounded-full p-0 m-0 flex flex-col justify-center items-center">
      {show && (
        <div className="flex flex-col justify-center items-center gap-2">
          <Link
            target="_blank"
            onClick={() => setShow(false)}
            href={"https://wa.me/+5493624877158"}
            className="bg-white p-2 rounded-full hover:bg-[#1877F2] transition duration-300 grid place-items-center"
          >
            <Image src={"/wspIcon.svg"} width={32} height={35} alt="wspIcon" />
          </Link>
          <Link
            target="_blank"
            onClick={() => setShow(false)}
            href={
              "https://www.instagram.com/ninadelnortealfajores?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            className="bg-white p-3 px-4 rounded-full hover:bg-[#1877F2] transition duration-300 grid place-items-center"
          >
            <Image
              src={"/facebookIcon.svg"}
              width={20}
              height={35}
              alt="fbIcon"
            />
          </Link>
          <Link
            target="_blank"
            onClick={() => setShow(false)}
            href={
              "https://www.instagram.com/ninadelnortealfajores?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            className="bg-white p-2 rounded-full hover:bg-[#1877F2] transition duration-300 grid place-items-center"
          >
            <Image src={"/IgIcon.svg"} width={32} height={35} alt="igIcon" />
          </Link>
        </div>
      )}
      <button
        onClick={() => setShow(!show)}
        className="bg-white p-3 rounded-full hover:bg-[#1877F2] transition duration-300 grid place-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SocialNetworkButtons;
