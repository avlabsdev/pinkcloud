import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
  weight: "100 900",
});

const poppins = localFont({
  src: "./fonts/Poppins-Regular.woff2",
  variable: "--font-poppins",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pink Cloud - Sober Support Services by AV Labs",
  description: "Sober Support Services by AV Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Pink Cloud" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:url" content="https://pinkcloud.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pink Cloud - Sober Support Services by AV Labs"
        />
        <meta
          property="og:description"
          content="Sober Support Services by AV Labs"
        />
        <meta property="og:image" content="/favicon.svg" />

        <meta name="twitter:card" content="/favicon.svg" />
        <meta property="twitter:domain" content="pinkcloud.vercel.app" />
        <meta property="twitter:url" content="https://pinkcloud.vercel.app/" />
        <meta
          name="twitter:title"
          content="Pink Cloud - Sober Support Services by AV Labs"
        />
        <meta
          name="twitter:description"
          content="Sober Support Services by AV Labs"
        />
        <meta name="twitter:image" content="/favicon.svg" />
      </head>
      <body className={`${manrope.variable} ${poppins} antialiased`}>
        {children}
      </body>
    </html>
  );
}
