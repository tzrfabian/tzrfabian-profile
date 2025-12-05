import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DotGrid from "@/components/Backgrounds/DotGrid";

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
  metadataBase: new URL('https://fabian.tenzara.my.id'),
  title: {
    default: "Home | Fabian Tenzara",
    template: "%s | tzrfabian"
  },
  description: "Welcome to my personal website. Here you can find information about my background, experience, and projects.",
  keywords: ["Fabian Tenzara", "Software Developer", "Portfolio", "Projects"],
  authors: [{ name: "Fabian Tenzara" }],
  creator: "Fabian Tenzara",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fabian.tenzara.my.id',
    siteName: "tzrfabian",
    title: "Home | Fabian Tenzara",
    description: "Welcome to my personal website. Here you can find information about my background, experience, and projects.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Home | Fabian Tenzara",
    description: "Welcome to my personal website. Here you can find information about my background, experience, and projects.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* Fixed background layer */}
        <div className="fixed inset-0 z-0">
          <DotGrid
            dotSize={5}
            gap={25}
            baseColor="#0b1c38"
            activeColor="#3518ab"
            proximity={120}
            shockRadius={300}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Page content (above background) */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
