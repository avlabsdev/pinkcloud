import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex flex-col">
        <div className="flex items-center justify-between">
          <span className="flex gap-2 items-center font-medium text-2xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-10 fill-pink-600"
            >
              <path d="M304 160c-74.1 0-135.2 56-143.1 128L96 288c-53 0-96-43-96-96s43-96 96-96l1.1 0C104.9 41.7 151.6 0 208 0c47.9 0 88.8 30.1 104.8 72.4C324.8 67 338 64 352 64c53 0 96 43 96 96c0 12.1-2.2 23.6-6.3 34.2c-11.4 2.3-22.2 6.4-32.1 11.9C383.3 177.7 345.7 160 304 160zM224 512c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2c-1.3-6.7-1.9-13.7-1.9-20.8c0-61.9 50.1-112 112-112c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96l-320 0z" />
            </svg>
            Pink Cloud
          </span>
          <nav className="flex items-center gap-16 z-10 text-white">
            <span className="flex items-center gap-10">
              <Link href="#/">About Us</Link>
              <Link href="#/">Services</Link>
              <Link href="#/">Resources</Link>
              <Link href="#/">Contact Us</Link>
            </span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-8 fill-white"
              >
                <path d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM64 248c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 272c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24L24 432c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0c13.3 0 24 10.7 24 24z" />
              </svg>
            </button>
          </nav>
        </div>
        <div className="flex z-10 justify-between">
          <div className="w-1/4 z-10 flex flex-col gap-12">
            <h1 className="text-white font-semibold text-4xl leading-snug mt-36">
              Join us in making a difference
            </h1>
            <p>
              Together, we can uplift lives, build hope, and create a brighter
              future. Join us on this journey.
            </p>
          </div>
          <div className="flex w-2/3 gap-24 pl-16 mt-20">
            <div className="flex self-start p-8 px-12 backdrop-blur-md bg-white/0 rounded-xl border border-white border-opacity-25 text-white w-3/4 gap-4">
              <div className="flex flex-col gap-4">
                <span className="text-2xl">Helping Matters</span>
                <p>Our mission is to empower communities and provide support</p>
              </div>
              <div className="flex flex-col gap-4 justify-between items-end">
                <span>
                  <Image
                    src="/arrow_outward.svg"
                    alt="Arrow Outward"
                    width={42}
                    height={42}
                  />
                </span>
                <span>
                  <Image
                    src="/dot-icon.svg"
                    alt="Dot Icon"
                    width={53}
                    height={49}
                  />
                </span>
              </div>
            </div>
            <div className="flex self-end mt-60 p-8 px-12 backdrop-blur-md bg-white/0 rounded-xl border border-white border-opacity-25 text-white w-3/4 gap-4">
              <div className="flex flex-col gap-4">
                <span className="text-2xl">Helping Matters</span>
                <p>Our mission is to empower communities and provide support</p>
              </div>
              <div className="flex flex-col gap-4 justify-between items-end">
                <span>
                  <Image
                    src="/arrow_outward.svg"
                    alt="Arrow Outward"
                    width={42}
                    height={42}
                  />
                </span>
                <span>
                  <Image
                    src="/dot-icon.svg"
                    alt="Dot Icon"
                    width={53}
                    height={49}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="flex text-white font-medium text-7xl z-10 w-2/3 leading-snug">
          Where Every Contribution Makes a Difference
        </h2>
        <Image
          src="/pink-cloud-hero-img.png"
          alt="Pink Cloud"
          width={1199}
          height={1029}
          className="absolute top-0 right-0 w-2/3 max-w-2/3 z-0 max-h-screen h-full object-cover"
        />
      </header>
    </>
  );
}