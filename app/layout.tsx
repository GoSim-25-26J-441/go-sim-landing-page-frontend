import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import "../styles/theme.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import TimedLoader from "../components/common/timedLoader/TimedLoader";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "ArcFind",
  description: "Software for simulating and analyzing ARCs.",
  icons: {
    icon: "/favicon.ico",
  },
};

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-landing",
  adjustFontFallback: true,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`dark ${fontSans.variable}`}>
      <body
        className={`${fontSans.className} min-h-screen bg-linear-to-b from-[#1F1F1F] to-black text-white antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <TimedLoader ms={1000} Loader={Loading}>
            {children}
          </TimedLoader>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
