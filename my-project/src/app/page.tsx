import Image from "next/image";
import Link from "next/link";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BoxClearOne from "./components/BoxClearOne";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow py-16 gap-40">
        <section className="flex items-center gap-16">
          <div className="w-2/5 flex flex-col gap-8">
            <span className="flex items-center p-3 px-10 border rounded-full border-white border-opacity-40 text-xl w-fit bg-white bg-opacity-5">
              Spreading Kindness & Love to Those In Need
            </span>
            <div className="flex gap-8">
              <span className="flex items-center p-3 px-10 border rounded-full border-white border-opacity-40 text-xl w-fit bg-white bg-opacity-5">
                Making Differences
              </span>
              <span className="flex items-center p-3 px-10 border rounded-full border-white border-opacity-40 text-xl w-fit bg-white bg-opacity-5">
                Spreading Kindness
              </span>
            </div>
          </div>
          <div className="w-3/5">
            <div className="flex items-center p-10 py-8 border rounded-3xl border-white border-opacity-40 bg-white bg-opacity-5 gap-10">
              <Image
                src="/hands-in.png"
                alt="Hero"
                width={386 / 2}
                height={194 / 2}
              />
              <span className="text-white text-3xl leading-snug">
                Join us in our mission to change the world one day at a time.
              </span>
            </div>
          </div>
        </section>
        <section>
          <div className="flex gap-16">
            <div className="w-3/5 flex flex-col gap-16">
              <h2 className="text-7xl font-medium leading-snug">
                Together for a better tomorrow.
              </h2>
              <p className="pr-8 leading-relaxed">
                Whether you’re here to volunteer, donate, or simply learn more,
                we offer various ways for you to get involved and make a
                meaningful impact. Together, we can uplift lives, build hope,
                and create a brighter future. Join us on this journey of
                compassion and contribute.
              </p>
              <div className="relative flex justify-center items-center h-full w-full mb-48 mt-16">
                <Image
                  src="/curved-box.svg"
                  alt="Box"
                  width={837}
                  height={401}
                  className="absolute left-0 z-0"
                />
                <div className="p-16 px-20 z-10 flex flex-col gap-12">
                  <h3 className="text-4xl w-2/3 leading-snug">
                    Join us in spreading kindness and making a positive impact
                  </h3>
                  <div className="flex items-start gap-8">
                    <Link href="#/">
                      <Image
                        src="/arrow-up-right-w-bg.svg"
                        alt="Arrow"
                        width={61 * 2}
                        height={61 * 2}
                      />
                    </Link>
                    <div>
                      <p className="pr-14">
                        Whether you’re here to volunteer, donate, or simply
                        learn more, we offer various ways for you to get
                        involved and make a meaningful impact. Together, we can
                        uplift lives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-2/5 flex-col">
              <Image
                src="/planning.png"
                alt="Planning"
                width={1156}
                height={1070}
                className="max-w-full object-cover h-fit"
              />
              <div className="flex justify-center -mt-20">
                <BoxClearOne
                  href="#/"
                  title="Making a Difference"
                  copy="Our mission is to empower communities all over the world."
                  iconSrcOne="./arrow_outward.svg"
                  iconSrcTwo="./dot-icon.svg"
                />
              </div>
              <div className="flex justify-between px-12 my-28">
                <div className="flex flex-col gap-4">
                  <span className="text-pink-700 text-4xl font-bold">
                    100,000+
                  </span>
                  <span className="font-medium text-2xl">Contributions</span>
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <span className="text-pink-700 text-4xl font-bold">
                    60,000+
                  </span>
                  <span className="font-medium text-2xl">Communities</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
