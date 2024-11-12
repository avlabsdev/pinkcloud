import Image from "next/image";

import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow py-16 gap-32">
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
          <div className="flex">
            <div className="w-3/5">Together for a better tomorrow.</div>
            <div className="w-3/5">Contributions make</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
