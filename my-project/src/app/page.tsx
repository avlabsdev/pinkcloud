// import Image from "next/image";

import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow">Main</main>
      <Footer />
    </>
  );
}
