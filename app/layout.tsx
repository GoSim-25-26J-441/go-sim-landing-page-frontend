import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/theme.css";

export const metadata: Metadata = { title: "GO-SIM", description: "Design Input & Analysis" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
       {children}
      </body>
    </html>
  );
}
