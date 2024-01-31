import Bookmarks from "@/components/home/Bookmarks";
import ConvertFromPDF from "@/components/home/ConvertFromPDF";
import ConvertToPDF from "@/components/home/ConvertToPDF";

export default function Home() {
  return (
    <main>
      <Bookmarks />
      <ConvertFromPDF />
      <ConvertToPDF />
    </main>
  );
}
