import { Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "DevShow | Developer Directory",
  description: "Discover and explore developer profiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <Navbar/>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
