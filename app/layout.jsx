import NavBar from "@/components/NavBar";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Camping App",
  description: "Web app to showcase camping services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
