import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
  weight: "100 900",
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
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
