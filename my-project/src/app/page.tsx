// import Image from "next/image";

import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow py-16">
        <section>
          <h1 className="text-4xl font-bold text-white">
            Welcome to Pink Cloud
          </h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
