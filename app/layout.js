import localFont from "next/font/local";
import "./globals.css";

// React slick stylesheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const harmonyFonts = localFont({
  src: [
    {
      path: "../public/fonts/HarmonyOS_Sans_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HarmonyOS_Sans_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HarmonyOS_Sans_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-harmony",
});

export const metadata = {
  title: "Frontend Task with NextJS",
  description: "Frontend Task with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${harmonyFonts.variable} bg-white dark:bg-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
