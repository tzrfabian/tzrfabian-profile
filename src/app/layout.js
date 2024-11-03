import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home | tzrfabian",
  description: "My fullname is Muhammad Habib Fabian Tenzara, you can call me Fabian. I am a computer science graduate from Bina Nusantara University. I previously had an internship experience as a DevOps Engineer for 1 year.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
