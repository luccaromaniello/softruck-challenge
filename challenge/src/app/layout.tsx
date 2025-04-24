import type { Metadata } from "next";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Softruck Challenge - Lucca Romaniello",
  description: "Softruck's coding challenge answers by Lucca Romaniello.",
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
