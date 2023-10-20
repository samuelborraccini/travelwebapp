import NavBar from "@/components/NavBar";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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