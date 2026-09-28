import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Abdulkadir | Full-Stack Developer",
  description: "Portfolio of Mohamed Abdulkadir Abdullahi — a self-taught Full-Stack Developer building toward Software Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
