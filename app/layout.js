import localFont from "next/font/local";
import "../styles/globals.css";

// React slick stylesheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import harmonyFonts from "@/styles/fonts";

export const metadata = {
  title: "Frontend Task with NextJS",
  description: "Frontend Task with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${harmonyFonts.variable} m-0 p-0 bg-white dark:bg-darkBg`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
