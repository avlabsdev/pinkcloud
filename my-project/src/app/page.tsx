import Image from "next/image";
import Link from "next/link";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BoxClearOne from "./components/BoxClearOne";
import ClearBoxRoundedFull from "./components/ClearBoxRoundedFull";

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
              <div className="relative flex justify-center items-center h-full w-full mb-6 mt-16">
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
              <div className="flex justify-between px-12 mt-24">
                <div className="flex flex-col gap-4">
                  <span className="custom-text-pink text-5xl font-bold">
                    100K+
                  </span>
                  <span className="font-medium text-3xl font-poppins">
                    Contributions
                  </span>
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <span className="custom-text-pink text-5xl font-bold">
                    60K+
                  </span>
                  <span className="font-medium text-3xl font-poppins">
                    Communities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-image-hands-in rounded-3xl p-24 py-28 flex gap-16 pt-64">
            <div className="flex flex-col gap-12 w-3/5">
              <span className="text-6xl font-medium leading-snug">
                Where every helping hand counts!
              </span>
              <p className="leading-loose text-lg">
                Whether you’re here to volunteer, donate, or simply learn more,
                we offer various ways for you to get involved and make a
                meaningful impact.
              </p>
            </div>
            <div className="flex flex-col items-end justify-end w-2/5">
              <div className="mb-auto flex flex-col items-end gap-4">
                <span className="text-5xl font-semibold mt-8">60K+</span>
                <span className="font-medium text-3xl font-poppins">
                  Communities
                </span>
              </div>
              <div>
                <ClearBoxRoundedFull copy="Spreading Kindness & Love to Those In Need" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-3 grid-rows-2 gap-8 gap-x-10">
            <Link
              href="#/"
              className="backdrop-blur-md bg-white/5 rounded-3xl p-10 pb-16 border border-white border-opacity-40 flex flex-col gap-6"
            >
              <svg
                width="144"
                height="145"
                viewBox="0 0 144 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_6_233"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="144"
                  height="145"
                >
                  <rect y="0.514648" width="144" height="144" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_233)">
                  <path
                    d="M24 120.515V99.5146H30V114.515H45V120.515H24ZM99 120.515V114.515H114V99.5146H120V120.515H99ZM72 108.515C62.015 108.515 53.519 105.011 46.512 98.0026C39.504 90.9957 36 82.4996 36 72.5146C36 62.5296 39.504 54.0337 46.512 47.0267C53.519 40.0187 62.015 36.5146 72 36.5146C81.985 36.5146 90.481 40.0187 97.488 47.0267C104.496 54.0337 108 62.5296 108 72.5146C108 82.4996 104.496 90.9957 97.488 98.0026C90.481 105.011 81.985 108.515 72 108.515ZM72 102.515C80.3 102.515 87.375 99.5897 93.225 93.7397C99.075 87.8897 102 80.8146 102 72.5146C102 64.2146 99.075 57.1396 93.225 51.2896C87.375 45.4396 80.3 42.5146 72 42.5146C63.7 42.5146 56.625 45.4396 50.775 51.2896C44.925 57.1396 42 64.2146 42 72.5146C42 80.8146 44.925 87.8897 50.775 93.7397C56.625 99.5897 63.7 102.515 72 102.515ZM24 45.5146V24.5146H45V30.5146H30V45.5146H24ZM114 45.5146V30.5146H99V24.5146H120V45.5146H114Z"
                    fill="#AA336A"
                  />
                </g>
              </svg>
              <span className="px-6 flex text-3xl leading-snug font-medium">
                Empowering community, uplifting lives
              </span>
              <p className="px-6 mt-4">
                Whether you’re here to volunteer, donate, or simply learn more,
                we offer{" "}
              </p>
            </Link>
            <Link
              href="#/"
              className="backdrop-blur-md bg-white/5 rounded-3xl p-10 pb-16 border border-white border-opacity-40 flex flex-col gap-6"
            >
              <svg
                width="144"
                height="144"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_6_275"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="144"
                  height="144"
                >
                  <rect width="144" height="144" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_275)">
                  <path
                    d="M24.693 116.078V110.078H43.269L36.9465 103.823C32.2845 99.2996 28.923 94.3381 26.862 88.9381C24.8 83.5381 23.769 78.0691 23.769 72.5311C23.769 62.8921 26.517 54.1711 32.013 46.3681C37.509 38.5641 44.761 32.9926 53.769 29.6536V36.0226C46.492 39.0846 40.673 43.9331 36.312 50.5681C31.95 57.2021 29.769 64.5231 29.769 72.5311C29.769 77.4151 30.696 82.1556 32.55 86.7526C34.404 91.3486 37.285 95.6001 41.193 99.5071L47.307 105.623V87.4621H53.307V116.078H24.693ZM119.434 64.0381H113.4C112.669 60.5381 111.44 57.1306 109.713 53.8156C107.986 50.5006 105.684 47.3931 102.807 44.4931L96.693 38.3776V56.5381H90.693V27.9226H119.307V33.9226H100.731L107.053 40.1776C110.538 43.7616 113.285 47.5576 115.293 51.5656C117.3 55.5736 118.68 59.7311 119.434 64.0381ZM102 124.847L101.353 119.654C99.0765 119.154 97.2015 118.456 95.7285 117.56C94.2555 116.664 92.8535 115.547 91.5225 114.209L86.7465 116.331L83.2845 111.207L87.531 107.747C86.792 105.578 86.4225 103.508 86.4225 101.538C86.4225 99.5691 86.792 97.5001 87.531 95.3311L83.2845 91.8691L86.7465 86.7466L91.5225 88.8691C92.8535 87.5311 94.2555 86.4141 95.7285 85.5181C97.2015 84.6211 99.0765 83.9226 101.353 83.4226L102 78.2311H108L108.646 83.4226C110.923 83.9226 112.798 84.6266 114.271 85.5346C115.744 86.4426 117.146 87.5771 118.477 88.9381L123.253 86.7466L126.715 91.9381L122.469 95.4001C123.208 97.5231 123.577 99.5806 123.577 101.573C123.577 103.566 123.208 105.624 122.469 107.747L126.715 111.207L123.253 116.331L118.477 114.209C117.146 115.547 115.744 116.664 114.271 117.56C112.798 118.456 110.923 119.154 108.646 119.654L108 124.847H102ZM105 114.462C108.531 114.462 111.567 113.191 114.109 110.648C116.651 108.106 117.922 105.069 117.922 101.538C117.922 98.0081 116.651 94.9716 114.109 92.4286C111.567 89.8866 108.531 88.6156 105 88.6156C101.469 88.6156 98.4325 89.8866 95.8905 92.4286C93.3485 94.9716 92.0775 98.0081 92.0775 101.538C92.0775 105.069 93.3485 108.106 95.8905 110.648C98.4325 113.191 101.469 114.462 105 114.462Z"
                    fill="#AA336A"
                  />
                </g>
              </svg>

              <span className="px-6 flex text-3xl leading-snug font-medium">
                Where every helping hand counts!
              </span>
              <p className="px-6 mt-4">
                Whether you’re here to volunteer, donate, or simply learn more,
                we offer{" "}
              </p>
            </Link>
            <Link
              href="#/"
              className="backdrop-blur-md bg-white/5 rounded-3xl p-10 pb-16 border border-white border-opacity-40 flex flex-col gap-6"
            >
              <svg
                width="144"
                height="145"
                viewBox="0 0 144 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_6_190"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="144"
                  height="145"
                >
                  <rect y="0.514648" width="144" height="144" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_190)">
                  <path
                    d="M46.1535 98.3611V46.6681H97.8465V98.3611H46.1535ZM52.1535 92.3611H91.8465V52.6681H52.1535V92.3611ZM31.3845 113.13V120.515C29.3535 120.515 27.615 119.792 26.169 118.346C24.723 116.9 24 115.161 24 113.13H31.3845ZM24 98.3611V90.9766H31.3845V98.3611H24ZM24 76.2076V68.8216H31.3845V76.2076H24ZM24 54.0526V46.6681H31.3845V54.0526H24ZM31.3845 31.8991H24C24 29.8681 24.723 28.1297 26.169 26.6837C27.615 25.2377 29.3535 24.5146 31.3845 24.5146V31.8991ZM46.1535 120.515V113.13H53.538V120.515H46.1535ZM46.1535 31.8991V24.5146H53.538V31.8991H46.1535ZM68.307 120.515V113.13H75.693V120.515H68.307ZM68.307 31.8991V24.5146H75.693V31.8991H68.307ZM90.462 120.515V113.13H97.8465V120.515H90.462ZM90.462 31.8991V24.5146H97.8465V31.8991H90.462ZM112.616 120.515V113.13H120C120 115.199 119.277 116.947 117.831 118.374C116.385 119.801 114.647 120.515 112.616 120.515ZM112.616 98.3611V90.9766H120V98.3611H112.616ZM112.616 76.2076V68.8216H120V76.2076H112.616ZM112.616 54.0526V46.6681H120V54.0526H112.616ZM112.616 31.8991V24.5146C114.647 24.5146 116.385 25.2377 117.831 26.6837C119.277 28.1297 120 29.8681 120 31.8991H112.616Z"
                    fill="#AA336A"
                  />
                </g>
              </svg>

              <span className="px-6 flex text-3xl leading-snug font-medium">
                Join us in spreading kindness
              </span>
              <p className="px-6 mt-4">
                Whether you’re here to volunteer, donate, or simply learn more,
                we offer{" "}
              </p>
            </Link>
            <Link
              href="#/"
              className="backdrop-blur-md bg-white/5 rounded-3xl p-10 pb-16 border border-white border-opacity-40 flex flex-col gap-6"
            >
              <svg
                width="144"
                height="144"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_6_311"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="144"
                  height="144"
                >
                  <rect width="144" height="144" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_311)">
                  <path
                    d="M126 109.131L120 103.131V63.693C120 62.693 119.635 61.8275 118.903 61.0965C118.172 60.3655 117.307 60 116.307 60H76.869L70.869 54H116.307C118.973 54 121.255 54.949 123.153 56.847C125.051 58.745 126 61.027 126 63.693V109.131ZM84 39.693V27.693C84 26.693 83.6345 25.8275 82.9035 25.0965C82.1725 24.3655 81.307 24 80.307 24H40.869L34.869 18H80.307C82.973 18 85.255 18.949 87.153 20.847C89.051 22.745 90 25.027 90 27.693V39.693H84ZM63.693 120H111.438L60 68.562V116.307C60 117.384 60.346 118.269 61.038 118.962C61.731 119.654 62.616 120 63.693 120ZM121.719 130.281L117.438 126H63.693C60.946 126 58.644 125.071 56.787 123.213C54.929 121.356 54 119.054 54 116.307V62.562L27.693 32.562V84H39.693V90H27.693C24.908 90 22.596 89.071 20.757 87.213C18.919 85.356 18 83.054 18 80.307V26.562L13.719 22.281L18 18L126 126L121.719 130.281Z"
                    fill="#AA336A"
                  />
                </g>
              </svg>

              <span className="px-6 flex text-3xl leading-snug font-medium">
                Be a part of something bigger
              </span>
              <p className="px-6 mt-4">
                Whether you’re here to volunteer, donate, or simply learn more,
                we offer{" "}
              </p>
            </Link>
            <Link
              href="#/"
              className="backdrop-blur-md bg-white/5 rounded-3xl p-10 pb-16 border border-white border-opacity-40 flex flex-col gap-6"
            >
              <svg
                width="144"
                height="144"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_6_293"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="144"
                  height="144"
                >
                  <rect width="144" height="144" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_293)">
                  <path
                    d="M23.4225 132V105.416C20.1535 104.524 17.4325 102.821 15.2595 100.309C13.0865 97.7985 12 94.7805 12 91.2555V37.038H23.4225V15C23.4225 14.15 23.7105 13.4375 24.2865 12.8625C24.8625 12.2875 25.576 12 26.427 12C27.278 12 27.99 12.2875 28.563 12.8625C29.136 13.4375 29.4225 14.15 29.4225 15V37.038H40.8465V91.2555C40.8465 94.7805 39.76 97.7985 37.587 100.309C35.414 102.821 32.6925 104.524 29.4225 105.416V132H23.4225ZM69 132V105.416C65.731 104.524 63.01 102.821 60.837 100.309C58.664 97.7985 57.5775 94.7805 57.5775 91.2555V37.038H69V15C69 14.15 69.288 13.4375 69.864 12.8625C70.44 12.2875 71.1535 12 72.0045 12C72.8555 12 73.5675 12.2875 74.1405 12.8625C74.7135 13.4375 75 14.15 75 15V37.038H86.4225V91.2555C86.4225 94.7805 85.336 97.7985 83.163 100.309C80.99 102.821 78.269 104.524 75 105.416V132H69ZM114.577 132V105.416C111.308 104.524 108.586 102.821 106.413 100.309C104.24 97.7985 103.154 94.7805 103.154 91.2555V37.038H114.577V15C114.577 14.15 114.865 13.4375 115.44 12.8625C116.016 12.2875 116.729 12 117.581 12C118.432 12 119.144 12.2875 119.718 12.8625C120.291 13.4375 120.577 14.15 120.577 15V37.038H132V91.2555C132 94.7805 130.914 97.7985 128.741 100.309C126.568 102.821 123.847 104.524 120.577 105.416V132H114.577ZM18 43.038V71.193H34.8465V43.038H18ZM63.5775 43.038V71.193H80.4225V43.038H63.5775ZM109.154 43.038V71.193H126V43.038H109.154ZM26.4225 99.693C28.7385 99.693 30.7215 98.8855 32.3715 97.2705C34.0215 95.6565 34.8465 93.656 34.8465 91.269V77.193H18V91.269C18 93.656 18.825 95.6565 20.475 97.2705C22.125 98.8855 24.1075 99.693 26.4225 99.693ZM72 99.693C74.315 99.693 76.2975 98.8855 77.9475 97.2705C79.5975 95.6565 80.4225 93.656 80.4225 91.269V77.193H63.5775V91.269C63.5775 93.656 64.4025 95.6565 66.0525 97.2705C67.7025 98.8855 69.685 99.693 72 99.693ZM117.577 99.693C119.893 99.693 121.875 98.8855 123.525 97.2705C125.175 95.6565 126 93.656 126 91.269V77.193H109.154V91.269C109.154 93.656 109.979 95.6565 111.628 97.2705C113.278 98.8855 115.262 99.693 117.577 99.693Z"
                    fill="#AA336A"
                  />
                </g>
              </svg>

              <span className="px-6 flex text-3xl leading-snug font-medium">
                Where every contribution makes
              </span>
              <p className="px-6 mt-4">
                Whether you’re here to volunteer, donate, or simply learn more,
                we offer{" "}
              </p>
            </Link>
            <Link
              href="#/"
              className="backdrop-blur-md bg-white/5 rounded-3xl p-10 pb-16 border border-white border-opacity-40 flex flex-col gap-6"
            >
              <svg
                width="144"
                height="145"
                viewBox="0 0 144 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_6_281"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="144"
                  height="145"
                >
                  <rect y="0.514648" width="144" height="144" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_6_281)">
                  <path
                    d="M71.7689 78.5146C70.1609 78.5146 68.7589 77.9166 67.563 76.7206C66.367 75.5247 65.7689 74.1227 65.7689 72.5146C65.7689 70.9066 66.367 69.5046 67.563 68.3086C68.7589 67.1126 70.1609 66.5146 71.7689 66.5146C73.3769 66.5146 74.779 67.1126 75.975 68.3086C77.171 69.5046 77.769 70.9066 77.769 72.5146C77.769 74.1227 77.171 75.5247 75.975 76.7206C74.779 77.9166 73.3769 78.5146 71.7689 78.5146ZM71.7689 120.515C59.5609 120.515 48.934 116.517 39.888 108.521C30.842 100.525 25.6074 90.5227 24.1844 78.5146H30.2534C31.8844 88.8376 36.602 97.4186 44.406 104.258C52.21 111.096 61.3309 114.515 71.7689 114.515C83.4689 114.515 93.394 110.44 101.544 102.29C109.694 94.1396 113.769 84.2146 113.769 72.5146C113.769 60.8146 109.694 50.8896 101.544 42.7396C93.394 34.5896 83.4689 30.5146 71.7689 30.5146C65.5609 30.5146 59.7264 31.8261 54.2654 34.4491C48.8034 37.0721 43.9839 40.6837 39.8069 45.2837H54.6929V51.2837H29.7689V26.3611H35.7689V40.6921C40.4079 35.5991 45.8444 31.6297 52.0784 28.7837C58.3134 25.9377 64.8769 24.5146 71.7689 24.5146C78.4289 24.5146 84.667 25.7666 90.4829 28.2706C96.299 30.7746 101.382 34.2017 105.732 38.5517C110.082 42.9017 113.509 47.9841 116.013 53.7991C118.517 59.6131 119.769 65.8496 119.769 72.5086C119.769 79.1666 118.517 85.4052 116.013 91.2242C113.509 97.0432 110.082 102.128 105.732 106.478C101.382 110.828 96.299 114.255 90.4829 116.759C84.667 119.263 78.4289 120.515 71.7689 120.515Z"
                    fill="#AA336A"
                  />
                </g>
              </svg>

              <span className="px-6 flex text-3xl leading-snug font-medium">
                Your compassion, our mission
              </span>
              <p className="px-6 mt-4">
                Whether you’re here to volunteer, donate, or simply learn more,
                we offer{" "}
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
