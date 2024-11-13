// import Image from "next/image";

import React from "react";
// import Link from "next/link";

interface ClearBoxRoundedFull {
  copy: string;
}

export default function ClearBoxRoundedFull(props: ClearBoxRoundedFull) {
  const { copy } = props;
  return (
    <>
      <span className="flex items-center p-4 px-8 border rounded-full border-white border-opacity-40 text-xl w-fit h-fit text-center bg-white bg-opacity-5 self-start backdrop-blur-md bg-white/0 text-white gap-4">
        {copy}
      </span>
    </>
  );
}
