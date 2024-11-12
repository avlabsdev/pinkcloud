// import Image from "next/image";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-between text-white z-10 mt-auto py-16">
        <p>&copy; AV Labs 2024. All rights reserved.</p>
        <span className="flex items-center gap-10">
          <Link
            className="opacity-80 hover:opacity-100"
            href="/terms-of-service"
          >
            Terms
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/privacy-policy">
            Privacy
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/cookie-policy">
            Cookies
          </Link>
        </span>
        <span className="flex items-center gap-10">
          <Link className="opacity-80 hover:opacity-100" href="#/">
            Icon
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="#/">
            Icon
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="#/">
            Icon
          </Link>
        </span>
      </footer>
    </>
  );
}
