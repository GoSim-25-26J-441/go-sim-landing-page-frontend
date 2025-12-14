import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/theme.css";

export const metadata: Metadata = {
  title: "ArcFind",
  description: "Software for simulating and analyzing ARCs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black">
        {children}
      </body>
    </html>
  );
}
