import { Inter } from "next/font/google";
import "./globals.css";

// React slick stylesheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Task with NextJS",
  description: "Frontend Task with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 box-border`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
