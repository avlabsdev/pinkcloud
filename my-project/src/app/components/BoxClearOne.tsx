import Image from "next/image";

import React from "react";
import Link from "next/link";

interface BoxClearProps {
  href: string;
  title: string;
  copy: string;
  iconSrcOne: string;
  iconSrcTwo: string;
}

export default function BoxClear(props: BoxClearProps) {
  const { href, title, copy, iconSrcOne, iconSrcTwo } = props;
  return (
    <>
      <Link
        href={href}
        className="flex self-start p-8 px-9 backdrop-blur-md bg-white/0 rounded-xl border border-white border-opacity-25 text-white w-3/4 gap-4"
      >
        <div className="flex flex-col gap-4 justify-between w-3/4">
          <span className="text-2xl drop-shadow">{title}</span>
          <p className="drop-shadow">{copy}</p>
        </div>
        <div className="flex flex-col gap-6 justify-between items-center w-1/4">
          <span className="self-end pr-1.5">
            <Image
              src={iconSrcOne}
              alt="Arrow Outward"
              width={42}
              height={42}
              className="drop-shadow"
            />
          </span>
          <span className="self-end">
            <Image
              src={iconSrcTwo}
              alt="Dot Icon"
              width={53}
              height={49}
              className="drop-shadow"
            />
          </span>
        </div>
      </Link>
    </>
  );
}
