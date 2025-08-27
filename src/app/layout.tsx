import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React. ШРИ",
  description: "Проект для изучения React по лекциям ШРИ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
