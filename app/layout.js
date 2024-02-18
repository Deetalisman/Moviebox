import { Inter } from "next/font/google";
import "./globals.css";
import Mainbody from "./body/page";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Mainbody />
      <body>{children}</body>
    </html>
  );
}